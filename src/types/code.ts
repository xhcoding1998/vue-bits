export interface CodeObject {
  utility?: string;
  code?: string;
  usage?: string;
  installation?: string;
}

export interface CodeObjectInput {
  utility?: string;
  code?: string;
  usage?: string;
  installation?: string;
}

export function createCodeObject(code: string, _path: string, data: CodeObjectInput): CodeObject {
  return {
    ...(data.installation && { installation: data.installation }),
    ...(data.usage && { usage: data.usage }),
    code,
    ...(data.utility && { utility: data.utility })
  };
}
