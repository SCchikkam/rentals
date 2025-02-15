frappe.web_form.after_load = () => {
    console.log("Loan Application Web Form Loaded!");

    // Add Submit Loan button
    frappe.web_form.add_button("Submit Loan", () => {
        let status = frappe.web_form.get_value("status");

        if (status === "Submitted") {
            frappe.msgprint("Loan application is already submitted.");
            return;
        }

        // Automatically set status to "Submitted"
        frappe.web_form.set_value("status", "Submitted");

        // Save the form after submission
        frappe.web_form.save().then(() => {
            let current_status = frappe.web_form.get_value('status');
            let success_message = `Thank you for spending your valuable time to fill this form.<br><br>Status: ${current_status}`;

            // Show the success message after form submission
            frappe.msgprint({
                title: "Submission Successful",
                message: success_message,
                indicator: "green"
            });
        });
    }, "primary");

    // Add "See Your Approval Status" button
    frappe.web_form.add_button("See Your Approval Status", () => {
        // Get the current approval status (Accepted/Rejected)
        let approval_status = frappe.web_form.get_value('approval_status');

        if (!approval_status) {
            frappe.msgprint("Your application is still under review.");
        } else {
            // Show approval status (Accepted or Rejected)
            frappe.msgprint({
                title: "Approval Status",
                message: `Your loan application has been ${approval_status}.`,
                indicator: "blue"
            });
        }
    }, "secondary");
};
