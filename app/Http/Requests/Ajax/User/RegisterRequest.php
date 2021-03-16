<?php

namespace App\Http\Requests\Ajax\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class RegisterRequest extends FormRequest
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
            'name' => 'required|string|max:20',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Name is required!!',
            'name.string' => 'Name must be string!!',
            'name.max' => 'The character is less than 20',
            'email.required' => 'E-mail is required!!',
            'email.string' => 'E-mail must be string!!',
            'email.email' => 'Input E-mail!!',
            'email.max' => 'The character is less than 255',
            'email.unique' => 'Not match!!',
            'password.required' => 'Password is required',
            'password.string' => 'Password must be string!!',
            'password.min' => 'Password is more than 8 characters',
            'password.confirmed' => 'Not match!!!!',
        ];
    }

    protected function failedValidation(Validator $validator) {
        $response['status']  = 400;
        $response['statusText'] = 'Failed validation.';
        $response['errors']  = $validator->errors();
        throw new HttpResponseException(
            response()->json( $response, 200 )
        );
    }
}
