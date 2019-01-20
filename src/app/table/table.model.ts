import { TableColumns } from '../interfaces/dashboardGrid.interface';

export class TableModel {
    getTableProps(): Array<TableColumns> {
        const cols: Array<TableColumns> = [
            {
                header: 'Message_Id',
                field: 'id'
            },
            {
                header: 'Last Updated Date',
                field: 'updated_at'
            },
            {
                header: 'Creditor Name',
                field: 'creditor_name'
            },
            {
                header: 'Amount',
                field: 'amount'
            },
            {
                header: 'Currency',
                field: 'currency'
            },
            {
                header: 'Status',
                field: 'status'
            },
            {
                header: 'Status Message',
                field: 'status_msg',
                className: 'unwrap-content',
                hasTooltip: true
            },
            {
                header: 'Payment Number',
                field: 'payment_num'
            }
        ];
        return cols;
    }
}
