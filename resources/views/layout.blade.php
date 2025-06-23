<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>My Tasks</title>
    @vite('resources/css/app.css')


    {{-- fonts --}}
 
</head>

<body class="antialiased">
    {{-- navbar --}}
<nav>
    <div>
        <h1 class="title-style">Task App</h1>
    </div>
</nav>


    {{-- body --}}
  <div class="container p-5">
  @yield('main-content')
  </div>




</body>

</html>