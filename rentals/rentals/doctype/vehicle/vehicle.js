// Copyright (c) 2025, bwh and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Vehicle", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Vehicle', {
    refresh: function(frm) {
        frm.get_field("summary").$wrapper.append("<h1>Here is your summary</h1>");
    }
});
