output "ui_url" {
  description = "URL of the UI App Service"
  value       = "https://${azurerm_linux_web_app.ui.default_hostname}"
}

output "api_url" {
  description = "URL of the API App Service"
  value       = "https://${azurerm_linux_web_app.api.default_hostname}"
}