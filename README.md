# Keybe Abandoned Carts VTEX Script

### How to implement

Include the script on the checkout scripts and replace YOUR_COMPANY_UUID, YOUR_APP_UUID, YOUR_PUBLIC_KEY for your keys.

The keys are located in [Keybe settings](https://keybe.app/admin/configurations/app "settings").

Before you insall the script you need to generate a webhook to control the flow.

To create a webhook in VTEX you need to generate the keys under the VTEX store admin.
App keys are located on: 👉
https://yourstoreslug.myvtex.com/admin/appkeys

### Example

```Language
curl --location --request POST 'https://yourstoreslug.myvtex.com/api/orders/hook/config' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'X-VTEX-API-AppKey: YOUR_APP_KEY' \
--header 'X-VTEX-API-AppToken: YOUR_APP_TOKEN' \
--data-raw '{
  "filter": {
      "type": "FromWorkflow",
      "status": ["order-created"]
  },
  "hook": {
     "url": "https://nwp3x7ssva.execute-api.us-east-1.amazonaws.com/prod/vtex/sell-confirm",
  }
}'
```
###  NOTE:  

You need to change YOUR_APP_KEY and YOUR_APP_TOKEN for the ones you generated on your store.

The webhook will guarantee the integration flow behavior.

## Especial Config
You need to add the phone country code in the variable ```countryCode:``` on the script for your country dial code without the '+' character, only numbers

# Submit Notification template

You would need to request a whatsapp generic template for notifications.
You need to request [template here](https://docs.google.com/forms/d/e/1FAIpQLScR-mTsTfmS3LH_uDVMV9Q4mnN1UXhIJKpUPea-j363077iOA/viewform?usp=sf_link "request-form").