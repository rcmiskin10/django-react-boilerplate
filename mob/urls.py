from django.conf import settings
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView
from django.conf.urls.static import static

from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token, refresh_jwt_token

urlpatterns = [
  path('api/auth/token/', obtain_jwt_token),
  path('auth-jwt-verify/', verify_jwt_token),
  path('auth-jwt-refresh/', refresh_jwt_token),
  path('admin/', admin.site.urls),
#   path('api/events/', include('events.api.urls')),
  path('api/accounts/', include('accounts.api.urls')),
  # path('api/', include('mynewapp.urls')),
  re_path('.*', TemplateView.as_view(template_name='react.html'))

]
