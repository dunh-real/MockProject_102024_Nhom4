<div>
    <form method="POST" action="{{ route('login') }}">
        @csrf
        <label for="">Name</label>
        <input id="email" name="email" type="email"> <br>
        <label for="">Password</label>
        <input id="password" name="password" type="password">
        <button type="submit">Login</button>
    </form>
</div>
