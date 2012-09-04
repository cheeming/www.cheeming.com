---
layout: post
title: Google Forms - E-mail Response with Form Submission
---
[Google Forms](http://www.google.com/google-d-s/forms/) are mighty useful and quite easy to setup. If you want to get an email response for each form submission you have to add a script to be triggered at form submission event. There are some tutorials out there but I think the script that they use is more complicated that I would like.

This is one way to do it:
1. Edit the Spreadsheet document that holds your form data. Click on menu Tools &gt; Script Manager.
2. The Script Manager dialog will pop up and you can click on New button and then select Blank Project.
3. Add the following code into the Code.gs file:
<pre><code>
    function formSubmissionResponseEmail(event) {
        var admin = "youremail@gmail.com";
        try {
            var recipient = event.namedValues["Email"];
            var subject = "You have signed up!";
            var message = "Thank you!";
            MailApp.sendEmail(recipient, subject, message);
        } catch (e) {
            MailApp.sendEmail(admin, "Error with form submission response email", e.message);
        }
    }
</code></pre>
4. The code specifically looks for the Form item by the name Email as the recipient of the response email. It will also email you when are there issues sending the response email. Modify the code accordingly and save it. Also give it a unique name so that you can easily reference it later. You can check the [reference for MailApp class](https://developers.google.com/apps-script/class_mailapp) for more description and explanation on using the code and more advanced usage for it.
5. Finally you need to hook the script with an event. In the script editor window, click on menu Resources > All your Triggers, a pop up will appear. Click on Add a New Trigger and make sure the event From spreadsheet + On form submit is chosen and click Save. The list will show all the notifications that you have and the notifications are user specific. Editing it with another user will not show these notifications. This is an odd design though and can be confusing.
6. You might be asked to Authorize the script to send email through your gmail account. This account will be seen as the sender of the response email. If you would like to send from another account you need to create the form and the script with another gmail account.

And with that you're done. Enjoy and hope this is useful!
