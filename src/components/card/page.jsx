'use client';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import HeroImage from '@/images/hero-image.jpg'; // 画像のパスを調整

export default function CardComponnts() {
  return (
    <Card style={{ width: '18rem' }}>
      <div style={{ position: 'relative', width: '100%', height: '180px' }}> {/* 例として高さを指定 */}
        <Image
          src={HeroImage} // インポートした画像を渡す
          alt="ヒーロー画像"
          fill // 親要素に合わせて画像を埋める
          style={{ objectFit: 'cover', borderRadius: 'calc(.375rem - 1px) calc(.375rem - 1px) 0 0' }} // Card.Imgのスタイルを模倣
          priority // LCP画像であれば設定
        />
      </div>
      <Card.Body>
        <Card.Title>お宝ハンターズ</Card.Title>
        <Card.Text>
          開発：Processing
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
