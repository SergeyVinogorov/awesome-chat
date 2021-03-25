import {
    HasEmptyInterface,
    MaxInterface,
    MinInterface,
    PatternInterface,
} from '../types/validationTypes';

export class PageFormValidatorService {
    public validateValue(value: string, type: string) {
        let isValid: boolean = false;

        switch (type) {
            case 'tel':
                const max = new MaxInterface(11);
                const min = new MinInterface(4);
                const pattern = new PatternInterface(
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                );
                isValid = max.isValid(value);
                isValid = min.isValid(value);
                isValid = pattern.isValid(value);
                break;
            case 'email':
                const email = new PatternInterface(
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
                isValid = email.isValid(value);
                break;
            case 'password':
                const hasEmpty = new HasEmptyInterface();
                isValid = hasEmpty.isValid(value);
                break;
            default:
                const defaultValue = new HasEmptyInterface();
                isValid = defaultValue.isValid(value);
                break;
        }
        return { value: value, isValid };
    }
}
