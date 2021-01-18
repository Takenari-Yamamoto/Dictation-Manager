<?php

namespace App\Policies;

use App\Dictation;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DictationPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any dictations.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the dictation.
     *
     * @param  \App\User  $user
     * @param  \App\Dictation  $dictation
     * @return mixed
     */
    public function view(User $user, Dictation $dictation)
    {
        return $user->id === $dictation->user_id;
    }

    /**
     * Determine whether the user can create dictations.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the dictation.
     *
     * @param  \App\User  $user
     * @param  \App\Dictation  $dictation
     * @return mixed
     */
    public function update(User $user, Dictation $dictation)
    {
        //
    }

    /**
     * Determine whether the user can delete the dictation.
     *
     * @param  \App\User  $user
     * @param  \App\Dictation  $dictation
     * @return mixed
     */
    public function delete(User $user, Dictation $dictation)
    {
        //
    }

    /**
     * Determine whether the user can restore the dictation.
     *
     * @param  \App\User  $user
     * @param  \App\Dictation  $dictation
     * @return mixed
     */
    public function restore(User $user, Dictation $dictation)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the dictation.
     *
     * @param  \App\User  $user
     * @param  \App\Dictation  $dictation
     * @return mixed
     */
    public function forceDelete(User $user, Dictation $dictation)
    {
        //
    }
}
