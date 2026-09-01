variable "location" {
  description = "Azure region where resources will be created"
  type        = string
  default     = "South India"
}

variable "resource_group_name" {
  description = "Name of the Azure Resource Group"
  type        = string
  default     = "Anusha-Rg"
}

variable "app_service_plan_name" {
  description = "Name of the App Service Plan"
  type        = string
  default     = "Anusha-plan"
}

variable "ui_app_name" {
  description = "Name of the UI App Service"
  type        = string
  default     = "ui-appservice"
}

variable "api_app_name" {
  description = "Name of the API App Service"
  type        = string
  default     = "api-appservice"
}