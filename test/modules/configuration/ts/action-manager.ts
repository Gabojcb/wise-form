
export class ActionManager {

    static copyValue = ({ dependency, settings, field, form }) => {
        dependency.on('change', () => field.set({ value: dependency.value }));
    };

    static showValues = ({dependency, settings, field, form}) => {
        dependency.on('click', ()=> console.log(dependency.value));
        console.log('dependency', dependency);
        console.log('settings', settings);
        console.log('field', field);
        console.log('form', form);
    }
}
