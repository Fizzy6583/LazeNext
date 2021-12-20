export default `
attribute vec2 aVertexPosition;

uniform mat4 model;
uniform mat4 projection;

void main() {
  gl_Position = projection * model * vec4(aVertexPosition, 0.0, 1.0);
}
`;
