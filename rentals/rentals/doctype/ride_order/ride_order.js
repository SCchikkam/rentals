// Copyright (c) 2025, bwh and contributors
// For license information, please see license.txt


//frappe.ui.form.on("Ride order", {
	//refresh(frm) {
        //frm.add_custom_button("Accept",()=>{
            
            //frappe.show_alert("It works")
       //})
 	//},
//});
frappe.ui.form.on('Ride order', {
    refresh(frm) {
        frm.add_custom_button(__('Accept'), function() {
            // Show a browser alert box
            window.alert(__('It works'));
        }).addClass('custom-accept-button'); // Add class to the button for styling
    }
});
