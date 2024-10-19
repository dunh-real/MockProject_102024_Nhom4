<?php
// Place this file on the Providers folder of your project
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Routing\ResponseFactory;

class ResponseServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot(ResponseFactory $factory)
    {
        $factory->macro('success', function ($message = '', $data = null) use ($factory) {
            $format = [
                'status' => 200,
                'message' => $message,
                'data' => $data,
            ];

            return $factory->make($format);
        });

        $factory->macro('success_created', function ($message = '', $data = null) use ($factory) {
            $format = [
                'status' => 201,
                'message' => $message,
                'data' => $data,
            ];

            return $factory->make($format);
        });

        $factory->macro('success_no_content', function ($message = '', $data = null) use ($factory) {
            $format = [
                'status' => 204,
                'message' => $message,
                'data' => $data,
            ];

            return $factory->make($format);
        });

        $factory->macro('server_error', function (string $message = '', $errors = []) use ($factory){
            $format = [
                'status' => 500, 
                'message' => $message,
                'errors' => $errors,
            ];

            return $factory->make($format);
        });

        
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}