import * as nameConst from './const';

export const employeeCall = () => ({
    type: nameConst.EMPLOYEE_CALL,
});

export const employeeCallSuccess = employees => ({
    type: nameConst.EMPLOYEE_CALL_SUCCESS,
    data: employees,
});
export const employeeCalFailed = error => ({
    type: nameConst.EMPLOYEE_CALL_FAILED,
    ...error,
});
