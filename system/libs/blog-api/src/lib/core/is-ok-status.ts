const isOkStatus = (status: number): boolean => status > 0 && status < 400;

export { isOkStatus };
