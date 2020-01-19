import { AbstractControl, ValidatorFn, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { NgIf } from '@angular/common';

// 指定した文字列を含む入力をチェックする
export function forbiddenWordValidator(word: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = control.value.includes(word);
    return forbidden ? {forbiddenWord: {value: control.value}} : null;
  };
}

// ディレクティブの定義。HTML属性でバリデーション適用を完結できる。
@Directive({
  // HTMLの属性で使用する文字列
  selector: '[appForbiddenWord]',
  // バリデータ用の設定。useExistingにカスタムバリデーションクラスを指定。
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenWordValidatorDirective, multi: true}]
})

// Validatorインターフェースを実装。
export class ForbiddenWordValidatorDirective implements Validator {
  // 入力
  @Input('appForbiddenWord') forbiddenWord: string;

  // AbstractControlを引数として、forbiddenWordValidatorに渡す。
  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.forbiddenWord ? forbiddenWordValidator(this.forbiddenWord)(control)
    : null;
  }
}
