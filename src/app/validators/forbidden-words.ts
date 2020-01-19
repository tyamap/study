import { AbstractControl, ValidatorFn } from '@angular/forms';

// 指定した文字列を含む入力をチェックする
export function forbiddenWordValidator(word: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = control.value.includes(word);
    return forbidden ? {forbiddenWord: {value: control.value}} : null;
  };
}
