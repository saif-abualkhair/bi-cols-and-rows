export const getTemplateArgs = (args: any) => {
    const argsAsMap = new Map(Object.entries(args));
    let templateArgs = '';
    argsAsMap.forEach((value, key) => {
        if (value) {
            templateArgs += `[${key}]="'${value}'" `;
        }
    });

    return templateArgs;
}

