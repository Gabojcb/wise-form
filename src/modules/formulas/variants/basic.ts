import type { FormulaManager } from '..';
import { EvaluationsManager } from '../helpers/evaluations';
import { Token } from '../helpers/token';
import { EvaluatedFormula, FormulaObserver, IComplexCondition, IConditionalField } from '../types/formulas';
import { parse } from 'mathjs';

export class FormulaBasic {
	#plugin: any;
	#specs: FormulaObserver;
	#tokens: Token[];
	get formula() {
		return this.#specs.formula;
	}
	get base() {
		const formula = <IComplexCondition>this.#specs.formula;
		return formula.base;
	}
	#value: string | number | undefined | 0;
	get value() {
		return this.#value;
	}
	get name() {
		return this.#specs.name;
	}
	/**
	 *  Represents the fields defined in the plugin settings
	 */
	get fields() {
		const formula = <IComplexCondition>this.formula;
		return typeof formula?.fields === 'string' ? [formula?.fields] : formula?.fields;
	}

	get conditions() {
		if (typeof this.#specs.formula === 'string') return;
		const formula = this.#specs.formula as IComplexCondition;
		return formula.conditions;
	}

	#emptyValue: undefined;
	#variables: string[] = [];
	get variables() {
		return this.#variables;
	};

	#round: boolean

	#parent: FormulaManager;
	constructor(parent, plugin, specs) {
		this.#parent = parent;
		this.#plugin = plugin;
		this.#specs = specs;
		this.#round = specs.round
		if (this.#specs.emptyValue) this.#emptyValue = this.#specs.emptyValue;
	}

	initialize() {
		const { tokens } = this.#parent.getParser(this.#specs);
		this.#tokens = tokens;
		const variables = this.#tokens.filter(token => token.type === 'variable').map(item => item.value);
		this.#variables = variables;
		const models = this.#parent.getModels(variables);
		models.forEach(model => {
			if ([undefined].includes(model)) {
				return;
			}

			model.on('change', this.calculate.bind(this));
		});
	}

	calculate() {
		const variables = this.#variables;

		const formulaField = this.#plugin.form.getField(this.name);

		let params = this.#parent.getParams(variables);
		const models = this.#parent.getModels(variables);

		const empty = (models as any[]).every(model => [null, undefined, ''].includes(model.value));

		if (empty) {
			// If all models are empty, set the input to empty if exists.
			if (formulaField) formulaField.set({ value: '' });
			this.#value = undefined;
			return;
		}
		Object.entries(params).forEach(([key, value]: any[]) => {
			params[key] = !!value && typeof value === "string" && value.includes("%") ? value.replaceAll('%', '').replaceAll('.', '*').replaceAll(',', '.').replaceAll('*', ',') : value
		})
		try {
			let result = models.length === 1 ? models[0].value : parse(this.formula as string).evaluate(params);
			const isInvalidResult = [-Infinity, Infinity, undefined, null, NaN].includes(result)
			if (this.#round && !isInvalidResult) result = Math.round(result)
			this.#value = isInvalidResult ? this.#emptyValue : Number(result.toFixed(2));;
			if (formulaField) formulaField.set({ value: this.#value });

			this.#parent.trigger('change');
		} catch (e) {
			console.log('formula', this.name, this.formula, params);
			console.trace(e);
			throw new Error(`Error calculating the formula: ${e.message}`);
		}
	}
}
