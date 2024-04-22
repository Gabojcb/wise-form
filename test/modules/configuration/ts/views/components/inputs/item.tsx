import React from 'react';
import { Input, Radio, Select, Textarea } from 'pragmate-ui/form';
import { CollapsibleContainer, CollapsibleHeader, CollapsibleContent } from 'pragmate-ui/collapsible';
import { typeFields } from './options';

export function ContentFieldItem({ index }) {
    const [selectedValue, setSelectedValue] = React.useState('');
    const [showOptions, setShowOptions] = React.useState(false);
    const [radioRequired, setRadioRequired] = React.useState('true');
    const [radioDisabled, setRadioDisabled] = React.useState('enabled');

    function handleRadioRequired(event) {
        const { value } = event.target;
        setRadioRequired(value);
    };

    function handleRadioDisabled(event) {
        const { value } = event.target;
        setRadioDisabled(value);
    };

    const handleSelectChange = (event) => {
        const { value } = event.currentTarget;
        setSelectedValue(value);
    };

    React.useEffect(() => {
        if (selectedValue === 'select') {
            setShowOptions(true);
        } else {
            setShowOptions(false);
        }
    }, [selectedValue])

    return (
        <>
            <CollapsibleContainer>
                <div className="block-configuration">
                    <CollapsibleHeader className='block-configuration__header'>
                        <h3 className='block-based__strong'>Field: {index}</h3>
                    </CollapsibleHeader>
                    <CollapsibleContent className='block-configuration__content'>
                        <div className="content-flex">
                            <Input type='text' label='Nombre del Campo' value='' />
                            <Input type='text' label='ClassName' value='' />
                            <Input type='text' label='Label' value='' />
                            <Input type='text' label='Placeholder' value='' />
                            <Select
                                label="Tipo"
                                options={typeFields}
                                value={selectedValue}
                                onChange={handleSelectChange}
                            />
                            {showOptions && <Textarea label="Opciones" />}
                            <div className="content-radio__required">
                                <label className='label-radio'>Requerido:</label>
                                <Radio
                                    onChange={handleRadioRequired}
                                    checked={radioRequired === 'true'}
                                    name={`required-${index}`}
                                    value="true"
                                    label="Verdadero"
                                />
                                <Radio
                                    onChange={handleRadioRequired}
                                    checked={radioRequired === 'false'}
                                    name={`required-${index}`}
                                    value="false"
                                    label="Falso"
                                />
                            </div>
                            <div className="content-radio__disabled">
                                <label className='label-radio'>Desactivado:</label>
                                <Radio
                                    onChange={handleRadioDisabled}
                                    checked={radioDisabled === 'enabled'}
                                    name={`disabled-${index}`}
                                    value="enabled"
                                    label="Activo"
                                />
                                <Radio
                                    onChange={handleRadioDisabled}
                                    checked={radioDisabled === 'disabled'}
                                    name={`disabled-${index}`}
                                    value="disabled"
                                    label="Desactivado"
                                />
                            </div>
                        </div>
                    </CollapsibleContent>
                </div>
            </CollapsibleContainer>
        </>
    );
}
