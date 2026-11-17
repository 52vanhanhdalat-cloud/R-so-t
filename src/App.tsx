/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const IFRAME_SRC = '/assets/aistudio/he-sinh-thai-bao-hiem_75828682.html';

export default function App() {
  return (
    <iframe
      src={IFRAME_SRC}
      title="Hệ Sinh Thái Bảo Hiểm – Kiểm tra và tối ưu hoá các quyền lợi bảo hiểm"
      className="block h-full w-full border-0"
    />
  );
}
