<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

use App\Http\Requests;

class UserController extends Controller
{
    public function index()
    {
        return view('user.index', ['users' => User::all()]);
    }

    public function create()
    {
        return view('user.create');
    }

    public function store(Request $request)
    {
        $this->validate($request, User::rules());

        $user = new User();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);

        $user->save();

        flash('User was successfully created!', 'success');

        return redirect()->route('user.show', $user->id);
    }

    public function show(User $user)
    {
        return view('user.show', ['user' => $user]);
    }

    public function edit(User $user)
    {
        return view('user.edit', ['user' => $user]);
    }

    public function update(Request $request, User $user)
    {
        $this->validate($request, User::rules($user->id));

        $user->name = $request->name;
        $user->save();

        flash('User was successfully updated!', 'success');

        return redirect()->route('user.show', $user->id);
    }

    public function destroy(User $user)
    {
        $user->delete();
        flash('User was successfully removed!', 'success');
        return redirect()->route('user.index');
    }
}
