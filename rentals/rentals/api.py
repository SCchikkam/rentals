import frappe

@frappe.whitelist()
def get_emoji():
    return {"emoji": "😊"}

@frappe.whitelist()
def throw_emoji(doc,event):
    return {"emoji": "🚀"}
def send_payment_reminders():
    frappe.msgprint("📢 Sending payment reminders!")
def get_query_conditions_for_vehicle(user) :|
     return "name = 11"