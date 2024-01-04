function handleCredentialResponse(response) {
    const data  = jwtDecode(response.credential)
  
    fullName.textContent = data.name
    sub.textContent = data.sub
    given_name.textContent = data.given_name
    family_name.textContent = data.family_name
    email.textContent = data.email
    verifiedEmail.textContent = data.email_verified
    picture.setAttribute("src", data.picture)
  }
  
  window.onload = function () {
  
    google.accounts.id.initialize({
      client_id: "517317501875-ce8hqa4lao50sai08l9p501rov1jqm97.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
  
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"), {
      theme: "filled_black",
      size: "large",
      type: "standard",
      shape: "pill",
      locale: "pt-BR",
      logo_alignment: "left",
    } // customization attributes
    );
  
    google.accounts.id.prompt(); // also display the One Tap dialog
  }