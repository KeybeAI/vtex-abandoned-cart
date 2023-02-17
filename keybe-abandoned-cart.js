//Keybe AI Integration
//This script is used to integrate Keybe AI with VTEX
//We added this log to check if the script is loaded
console.log('keybe-checkout-ready')


window.onload = event => {
  setInterval(() => {
    if (window?.vtexjs?.checkout?.orderForm?.orderFormId !== '' && window.vtexjs.checkout.orderForm.orderFormId !== undefined) {
      fetch('https://tfwilu7fza.execute-api.us-east-2.amazonaws.com/prod/vtex/sync-contact', {
        method: 'POST',
        body: JSON.stringify({
          orderId: window?.vtexjs?.checkout?.orderForm?.orderFormId,
          dataClient: {
            companyUUID: 'YOUR_COMPANY_UUID',
            appUUID: 'YOUR_APP_UUID',
            publicKey: 'YOUR_PUBLIC_KEY',
            haveSearchPhoneUser: true
          },
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }, 10000);


  const inputPhone = window.document.getElementById('client-phone')
  inputPhone.addEventListener('blur', async () => {
    await fetch('https://tfwilu7fza.execute-api.us-east-2.amazonaws.com/prod/vtex/sync-user-by-data', {
      method: 'POST',
      body: JSON.stringify({
        userData: {
          name:
            window?.vtexjs?.checkout?.orderForm?.clientProfileData
              ?.firstName,
          lastName:
            window?.vtexjs?.checkout?.orderForm?.clientProfileData
              ?.lastName,
          email:
            window?.vtexjs?.checkout?.orderForm?.clientProfileData?.email,
          phone:
            window?.vtexjs?.checkout?.orderForm?.clientProfileData?.phone,
          countryCode: '57',
          extradata: [
            {
              field: 'abandono el carrito',
              value: 'si',
            },
          ],
        },
        keybeClientData: {
          companyUUID: 'YOUR_COMPANY_UUID',
          appUUID: 'YOUR_APP_UUID',
          publicKey: 'YOUR_PUBLIC_KEY',
          haveSearchPhoneUser: true
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  })
}