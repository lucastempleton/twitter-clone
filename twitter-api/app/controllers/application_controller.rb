class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    # before_acticon :current_user

    private

        def current_user
            # byebug
            @current_user = User.find_by_id(session[:user_id])
        end
end
