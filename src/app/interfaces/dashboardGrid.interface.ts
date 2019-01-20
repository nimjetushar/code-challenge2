export interface DashboardGridData {
    'id': number;
    'msg_id': string;
    'creditor_name': string;
    'amount': number;
    'currency': string;
    'status': string;
    'status_msg': string;
    'payment_num': number;
    'user_id': string;
    'create_by': string;
    'updated_by': string;
    'create_at': string;
    'pain002FileNm': string;
    'updated_at': string;
}

export interface TableColumns {
    field: string;
    header: string;
    className?: string;
    hasTooltip?: boolean;
}

export interface Tabs {
    label: String;
    key: number;
}
