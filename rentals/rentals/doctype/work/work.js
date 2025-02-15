// frappe.ui.form.on('Work', {
//     refresh(frm) {
//         frm.add_custom_button(__('Accept'), function() {
//             // Show a confirmation dialog
//             let userResponse = window.confirm(__('Your loan application is going to be reviewed within 2 days.'));

//             if (userResponse) {
//                 // If the user clicks "OK", do nothing (stay on the same page)
//             } else {
//                 // If the user clicks "Cancel", show a thank-you message
//                 window.alert(__('OK, Thank you! You can leave now.'));
//             }
//         }).addClass('custom-accept-button'); // Add class to the button for styling
//     // }
// });
// frappe.ui.form.on('Work', {
//     refresh(frm) {
//         // Accept Button
//         frm.add_custom_button(__('Accept'), function() {
//             // Show a confirmation dialog
//             let userResponse = window.confirm(__('Your loan application is going to be reviewed within 2 days.'));

//             if (userResponse) {
//                 // If the user clicks "OK", do nothing (stay on the same page)
//             } else {
//                 // If the user clicks "Cancel", show a thank-you message
//                 window.alert(__('OK, Thank you! You can leave now.'));
//             }
//         }).addClass('custom-accept-button'); // Add class to the button for styling

//         // Email Button
//         frm.add_custom_button(__('Email'), function() {
//             // Open Frappe's Email Dialog
//             frappe.prompt([
//                 {
//                     fieldname: 'email',
//                     label: 'Recipient Email',
//                     fieldtype: 'Data',
//                     reqd: 1
//                 },
//                 {
//                     fieldname: 'message',
//                     label: 'Message',
//                     fieldtype: 'Small Text',
//                     reqd: 1
//                 }
//             ], (values) => {
//                 frappe.call({
//                     method: "frappe.core.doctype.communication.email.make",
//                     args: {
//                         recipients: values.email,
//                         subject: "Loan Application Update",
//                         content: values.message,
//                         communication_medium: "Email",
//                         send_email: 1
//                     },
//                     callback: function(response) {
//                         if (!response.exc) {
//                             frappe.msgprint(__('Email Sent Successfully!'));
//                         }
//                     }
//                 });
//             }, __('Send Email'), __('Send'));
//         }).addClass('custom-email-button'); // Add class to the button for styling
//     }
// });
// frappe.ui.form.on('Work', {
//     refresh(frm) {
//         // Inject CSS dynamically
//         const customCSS = `
//             /* Accept Button */
//             .custom-accept-button {
//                 background-color: #28a745 !important; /* Bootstrap success green */
//                 color: white !important;
//                 border: none;
//                 padding: 8px 16px;
//                 border-radius: 5px;
//                 font-weight: bold;
//                 transition: all 0.3s ease-in-out;
//                 display: flex;
//                 align-items: center;
//                 gap: 5px;
//             }

//             .custom-accept-button:hover {
//                 background-color: #218838 !important; /* Darker green on hover */
//                 transform: scale(1.05);
//             }

//             /* Email Button */
//             .custom-email-button {
//                 background-color: #007bff !important; /* Bootstrap primary blue */
//                 color: white !important;
//                 border: none;
//                 padding: 8px 16px;
//                 border-radius: 5px;
//                 font-weight: bold;
//                 transition: all 0.3s ease-in-out;
//                 display: flex;
//                 align-items: center;
//                 gap: 5px;
//             }

//             .custom-email-button:hover {
//                 background-color: #0056b3 !important; /* Darker blue on hover */
//                 transform: scale(1.05);
//             }

//             /* WhatsApp Button */
//             .custom-whatsapp-button {
//                 background-color: #25D366 !important; /* WhatsApp green */
//                 color: white !important;
//                 border: none;
//                 padding: 8px 16px;
//                 border-radius: 5px;
//                 font-weight: bold;
//                 transition: all 0.3s ease-in-out;
//                 display: flex;
//                 align-items: center;
//                 gap: 5px;
//             }

//             .custom-whatsapp-button:hover {
//                 background-color: #1ebe5d !important; /* Darker green on hover */
//                 transform: scale(1.05);
//             }

//             /* Icons */
//             .custom-email-button i,
//             .custom-whatsapp-button i,
//             .custom-accept-button i {
//                 font-size: 16px;
//             }
//         `;

//         // Append CSS to the document head (if not already added)
//         if (!document.getElementById("custom-css")) {
//             let style = document.createElement("style");
//             style.id = "custom-css";
//             style.innerHTML = customCSS;
//             document.head.appendChild(style);
//         }

//         // Accept Button
//         let acceptButton = frm.add_custom_button(__('Accept'), function () {
//             let userResponse = window.confirm(__('Your loan application is going to be reviewed within 2 days.'));
//             if (!userResponse) {
//                 window.alert(__('OK, Thank you! You can leave now.'));
//             }
//         }).addClass('custom-accept-button');
//         //$(acceptButton).prepend('<i class="fa fa-check-circle"></i> '); // Add Accept icon

//         // Email Button with Icon
//         let emailButton = frm.add_custom_button(__('Email'), function () {
//             frappe.prompt([
//                 {
//                     fieldname: 'email',
//                     label: 'Recipient Email',
//                     fieldtype: 'Data',
//                     reqd: 1
//                 },
//                 {
//                     fieldname: 'message',
//                     label: 'Message',
//                     fieldtype: 'Small Text',
//                     reqd: 1
//                 }
//             ], (values) => {
//                 frappe.call({
//                     method: "frappe.core.doctype.communication.email.make",
//                     args: {
//                         recipients: values.email,
//                         subject: "Loan Application Update",
//                         content: values.message,
//                         communication_medium: "Email",
//                         send_email: 1
//                     },
//                     callback: function (response) {
//                         if (!response.exc) {
//                             frappe.msgprint(__('Email Sent Successfully!'));
//                         }
//                     }
//                 });
//             }, __('Send Email'), __('Send'));
//         }).addClass('custom-email-button');
//         $(emailButton).prepend('<i class="fa fa-envelope"></i> '); // Add Email icon

//         // WhatsApp Button with Icon
//         let whatsappButton = frm.add_custom_button(__('Whatsapp'), function () {
//             let phoneNumber = prompt(__('Enter recipient WhatsApp number (with country code):'));
//             if (phoneNumber) {
//                 let message = encodeURIComponent('Hello! Your loan application is under review.');
//                 let whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
//                 window.open(whatsappURL, '_blank'); // Open WhatsApp in new tab
//             }
//         }).addClass('custom-whatsapp-button');
//         $(whatsappButton).prepend('<i class="fa fa-whatsapp"></i> '); // Add WhatsApp icon
//     }
// });
frappe.ui.form.on('Work', {
    refresh(frm) {
        // Inject CSS dynamically
        const customCSS = `
            /* Accept Button */
            .custom-accept-button {
                background-color: #28a745 !important; /* Bootstrap success green */
                color: white !important;
                border: none;
                padding: 8px 16px;
                border-radius: 5px;
                font-weight: bold;
                transition: all 0.3s ease-in-out;
                display: flex;
                align-items: center;
                gap: 5px;
            }

            .custom-accept-button:hover {
                background-color: #218838 !important; /* Darker green on hover */
                transform: scale(1.05);
            }

            /* Email Button */
            .custom-email-button {
                background-color: #007bff !important; /* Bootstrap primary blue */
                color: white !important;
                border: none;
                padding: 8px 16px;
                border-radius: 5px;
                font-weight: bold;
                transition: all 0.3s ease-in-out;
                display: flex;
                align-items: center;
                gap: 5px;
            }

            .custom-email-button:hover {
                background-color: #0056b3 !important; /* Darker blue on hover */
                transform: scale(1.05);
            }

            /* WhatsApp Button */
            .custom-whatsapp-button {
                background-color: #25D366 !important; /* WhatsApp green */
                color: white !important;
                border: none;
                padding: 8px 16px;
                border-radius: 5px;
                font-weight: bold;
                transition: all 0.3s ease-in-out;
                display: flex;
                align-items: center;
                gap: 5px;
            }

            .custom-whatsapp-button:hover {
                background-color: #1ebe5d !important; /* Darker green on hover */
                transform: scale(1.05);
            }

            /* Icons */
            .custom-email-button i,
            .custom-whatsapp-button i,
            .custom-accept-button i {
                font-size: 16px;
            }
        `;

        // Append CSS to the document head (if not already added)
        if (!document.getElementById("custom-css")) {
            let style = document.createElement("style");
            style.id = "custom-css";
            style.innerHTML = customCSS;
            document.head.appendChild(style);
        }

        // Accept Button
        let acceptButton = frm.add_custom_button(__('Accept'), function () {
            let userResponse = window.confirm(__('Your loan application is going to be reviewed within 2 days.'));
            if (!userResponse) {
                window.alert(__('OK, Thank you! You can leave now.'));
            }
        }).addClass('custom-accept-button');
        //$(acceptButton).prepend('<i class="fa fa-check-circle"></i>'); // Only Accept icon

        // Email Button with Icon (No text)
        let emailButton = frm.add_custom_button(__(''), function () {
            frappe.prompt([
                {
                    fieldname: 'email',
                    label: 'Recipient Email',
                    fieldtype: 'Data',
                    reqd: 1
                },
                {
                    fieldname: 'message',
                    label: 'Message',
                    fieldtype: 'Small Text',
                    reqd: 1
                }
            ], (values) => {
                frappe.call({
                    method: "frappe.core.doctype.communication.email.make",
                    args: {
                        recipients: values.email,
                        subject: "Loan Application Update",
                        content: values.message,
                        communication_medium: "Email",
                        send_email: 1
                    },
                    callback: function (response) {
                        if (!response.exc) {
                            frappe.msgprint(__('Email Sent Successfully!'));
                        }
                    }
                });
            }, __('Send Email'), __('Send'));
        }).addClass('custom-email-button');
        $(emailButton).prepend('<i class="fa fa-envelope"></i>'); // Only Email icon

        // WhatsApp Button with Icon (No text)
        let whatsappButton = frm.add_custom_button(__('Whatsapp'), function () {
            let phoneNumber = prompt(__('Enter recipient WhatsApp number (with country code):'));
            if (phoneNumber) {
                let message = encodeURIComponent('Hello! Your loan application is under review.');
                let whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
                window.open(whatsappURL, '_blank'); // Open WhatsApp in new tab
            }
        }).addClass('custom-whatsapp-button');
        $(whatsappButton).prepend('<i class="fa fa-whatsapp"></i>'); // Only WhatsApp icon
    }
});
