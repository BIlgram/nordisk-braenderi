<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="utf-8">
    <title>Nordisk Brænderi | @yield('title')</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <link href="//fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">
    <link href="{{ elixir('css/app.css') }}" rel="stylesheet" type="text/css">
</head>
<body>
<div class="container">
    <nav id="primary-navigation">
        @include('navigation')
    </nav>
    <main id="primary-content">
        <header>
            <h2>@yield('subheader')</h2>
            <h1>@yield('header')</h1>
        </header>
        @yield('content')
    </main>
</div>
</body>
</html>