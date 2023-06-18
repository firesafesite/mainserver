from twilio.rest import Client

def sms(num, recp, loc, cam, url):
  # Twilio phone number and recipient's phone number
  twilio_number = ''  # Replace with your Twilio phone number
  recipient_number = ''  # Replace with the recipient's phone number

  # Variable values

  image_url = url # Replace with the URL of the smoke image

  # Create Twilio client
  client = Client(account_sid, auth_token)

  # Send the smoke detection message
  message = client.messages.create(
      body=f"Smoke detected on camera {cam} in {loc}\n\n"
           f"Respond with 'Yes' or 'No' to contact law enforcement:\n\n"
           f"Image: {image_url}",
      from_=twilio_number,
      to=recipient_number
  )

  print(f"Message sent with ID: {message.sid}")
