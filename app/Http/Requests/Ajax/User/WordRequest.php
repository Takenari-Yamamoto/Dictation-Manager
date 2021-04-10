<?php

namespace App\Http\Requests\Ajax\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class WordRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'word' => 'required|max:30',
            'classification' => 'nullable|max:10',
            'meaning' => 'nullable|max:10',
            'pronunciation' => 'nullable|max:10'
        ];
    }
    public function messages()
    {
        return [
            'word.max' => 'Please input 30 characters or less',
            'classification.max' => 'Please input 10 characters or less',
            'meaning.max' => 'Please input 10 characters or less',
            'pronunciation.max' => 'Please input 10 characters or less'
        ];
    }

    /**
     * [override] バリデーション失敗時ハンドリング
     *
     * @param Validator $validator
     * @throw HttpResponseException
     * @see FormRequest::failedValidation()
     */
    protected function failedValidation(Validator $validator) {
        $response['status']  = 400;
        $response['statusText'] = 'Failed validation.';
        $response['errors']  = $validator->errors();
        throw new HttpResponseException(
            response()->json( $response, 200 )
        );
    }
}
