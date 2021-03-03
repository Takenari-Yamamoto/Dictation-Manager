<?php

namespace App\Http\Requests\Ajax\User;

use Illuminate\Foundation\Http\FormRequest;

class DictationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'present|max:100',
            'content' => 'present|max:65535'
        ];
    }

    public function messages()
    {
        return [
            'title.max' => ':Please input 100 characters or less',
            'content.max' => 'Please input 65535 characters or less'
        ];
    }
}
