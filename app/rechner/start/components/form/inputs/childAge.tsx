import React from "react";
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import {CustomerQueryResult} from "@/rechner/start/components/start";

type CalculatorStartFormChildAgeInputProps = {
    control: any;
    pending: boolean;
    customer: CustomerQueryResult;
}

const options = [
    {value: 0, label: '0 Jahre'},
    {value: 1, label: '1 Jahr'},
    {value: 2, label: '2 Jahre'},
    {value: 3, label: '3 Jahre'},
    {value: 4, label: '4 Jahre'},
    {value: 5, label: '5 Jahre'},
    {value: 6, label: '6 Jahre'},
    {value: 7, label: '7 Jahre'},
    {value: 8, label: '8 Jahre'},
    {value: 9, label: '9 Jahre'},
    {value: 10, label: '10 Jahre'},
    {value: 11, label: '11 Jahre'},
    {value: 12, label: '12 Jahre'},
    {value: 13, label: '13 Jahre'},
    {value: 14, label: '14 Jahre'},
    {value: 15, label: '15 Jahre'},
    {value: 16, label: '16 Jahre'},
]

export default function CalculatorStartFormChildAgeInput({control, pending, customer}: CalculatorStartFormChildAgeInputProps) {
    return (
        <Controller
            name="childAge"
            control={control}
            render={({ field }) => (
                <Select placeholder="Alter des Kindes"
                        classNamePrefix="select"
                        options={options}
                        isDisabled={pending}
                        required={false}
                        defaultValue={customer?.childAge !== null && customer?.childAge !== undefined ? {value: customer.childAge, label: `${customer.childAge} ${customer.childAge === 1 ? 'Jahr' : 'Jahre'}`} : null}
                        onChange={((value) => field.onChange(value?.value))}
                />
            )}
        />
    );
}