import { ReactiveModel } from '@beyond-js/reactive/model';
import { FormModel } from '@bgroup/wise-form/form';
import { formForForms } from './forms/form-for-forms';
import { conditionsMultipleFields } from './forms/conditions-multiple-fields';
import { simpleFormulas } from './forms/simple-formulas';
import { FieldsForm } from './forms/fields';
import { valueOfField } from './forms/value-of-field';
import { WFSettings } from '@bgroup/wise-form/settings';
import { ReactSelect } from 'pragmate-ui/form/react-select';
import { Button } from 'pragmate-ui/components';
import { FormulaInput } from './views/components/formula-conditions';
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
			formForForms,
			fields: FieldsForm,
			conditionsMultipleFields,
			simpleFormulas,
			valueOfField,
		};
	}

	constructor() {
		super();
		this.setForm(this.forms.fields);
		WFSettings.setFields({
			select: ReactSelect,
			button: Button,
		});
	}

	async setForm(item) {
		if (this.#instances.has(item.name)) {
			this.#active = this.#instances.get(item.name);
			return this.trigger('change');
		}

		const form = await FormModel.create({ ...item });
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
