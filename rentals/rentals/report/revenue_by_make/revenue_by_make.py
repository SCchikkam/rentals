# Copyright (c) 2025, bwh and contributors
# For license information, please see license.txt
# import frappe
from frappe import _
from typing import List, Dict, Optional

def execute(filters: Optional[Dict] = None):
    columns = get_columns()
    data = get_data()
    
    return columns, data

def get_columns() -> List[Dict]:
    """Return columns for the report."""
    return [
        {
            "label": _("Column 1"),
            "fieldname": "column_1",
            "fieldtype": "Data",
        },
        {
            "label": _("Column 2"),
            "fieldname": "column_2",
            "fieldtype": "Int",
        },
    ]

def get_data() -> List[Dict]:
    """Return data for the report."""
    return [
        {"column_1": "Row 1", "column_2": 1},
        {"column_1": "Row 2", "column_2": 2},
    ]
