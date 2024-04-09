import { ReactiveModel } from '@beyond-js/reactive/model';
import { WFSettings } from '@bgroup/wise-form/settings';
import { ReactSelect } from 'pragmate-ui/form/react-select';
import { FormModel } from '@bgroup/wise-form/form';
import { Wrapper } from './views/wrapper';
import { AppInput } from './views/components/app-input';
import { Div } from './views/components/div';
import { Section } from './views/components/section';
import { formForForms } from './forms/form-for-forms';
import { conditionsMultipleFields } from './forms/conditions-multiple-fields';
import { simpleFormulas } from './forms/simple-formulas';
import { formForFields } from './forms/form-for-fields';
import { valueOfField } from './forms/value-of-field';
import { ActionManager } from './action-manager';
import { IForm } from './interfaces/form';

type FormItem = Record<string, [string, IForm]>;
export class StoreManager extends ReactiveModel<StoreManager> {
	#forms: Map<string, FormModel> = new Map();
	#active: FormModel;
	get active() {
		return this.#active;
	}
	#instances = new Map();

	get instances() {
		return this.#instances;
	}

	get forms() {
		return {
			formForForms: formForForms,
			formForFields: formForFields,
			conditionsMultipleFields: conditionsMultipleFields,
			simpleFormulas: simpleFormulas,
			valueOfField: valueOfField,
		};
	}

	constructor() {
		super();

		this.reactiveProps(['selected']);
		this.selected = this.forms.formForForms;
		this.setForm(this.forms.formForForms);
		WFSettings.setFields({
			select: ReactSelect,
			baseWrapper: Wrapper,
			appInput: AppInput,
			div: Div,
			section: Section,
		});
	}

	async setForm(item) {
		if (this.#instances.has(item.name)) {
			this.#active = this.#instances.get(item.name);
			return this.trigger('change');
		}

		const callbacks = {
			copyValue: ActionManager.copyValue,
			showValues: ActionManager.showValues
		};
		const form = await FormModel.create({ ...item, callbacks });
		this.#instances.set(item.name, form);
		this.#active = form;
		this.trigger('change');
	}
	loadData = async specs => {
		specs.dependency.on('change', async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/users');
			const data = await response.json();

			specs.field.set({ options: data.map(item => ({ value: item.id, label: item.name })) });
		});
	};
}
