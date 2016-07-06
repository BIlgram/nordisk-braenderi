<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="utf-8">
    <title>Nordisk Brænderi | @yield('title')</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href="//fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet" type="text/css">
    <link href="/css/main.css" rel="stylesheet" type="text/css">
</head>
<body>
<div id="primary-container">
    @if(Session::has('alert'))
        <div class="alert {{ Session::get('alert_level') }}">
            <div>{{ Session::get('alert') }}</div>
        </div>
    @endif

    <nav id="primary-navigation">
        @include('navigation')
    </nav>

    <main id="primary-content">
        <header>
            <div class="headings">
                <h2>@yield('subheader')</h2>
                <h1>@yield('header')</h1>
            </div>
            <div class="buttons">
                @yield('header-buttons')
            </div>
        </header>
        @yield('content')
    </main>
</div>

<script src="/js/main.js"></script>
</body>
</html>