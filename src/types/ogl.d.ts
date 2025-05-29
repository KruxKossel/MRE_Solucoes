declare module 'ogl' {
    export class Renderer {
        gl: WebGLRenderingContext & { canvas: HTMLCanvasElement };
        constructor(options?: any);
        render(scene: any): void;
        setSize(width: number, height: number): void;
    }

    export class Camera {
        position: { set: (x: number, y: number, z: number) => void };
        constructor(gl?: any, options?: any);
        perspective(options: { aspect: number }): void;
    }

    export class Geometry {
        constructor(gl: any, attributes?: any);
    }

    export class Program {
        uniforms: {
            [key: string]: {
                value: any;
            };
        };
        constructor(gl: any, options?: any);
    }

    export class Mesh {
        position: {
            x: number;
            y: number;
            z: number;
        };
        rotation: {
            x: number;
            y: number;
            z: number;
        };
        constructor(gl: any, options?: any);
    }
} 