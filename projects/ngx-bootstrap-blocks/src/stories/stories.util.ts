export const getTemplateArgs = (args: any) => {
    const argsAsMap = new Map(Object.entries(args));
    let templateArgs = '';
    argsAsMap.forEach((value, key) => {
        if (value && value !== 'none') {
            templateArgs += `[${key}]="'${value}'" `;
        }
    });

    return templateArgs;
}

