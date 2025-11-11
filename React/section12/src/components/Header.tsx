import './Header.css';

const Header = ({
  leftChild,
  title,
  rightChild,
}: {
  leftChild: React.ReactNode;
  title: React.ReactNode;
  rightChild: React.ReactNode;
}) => {
  return (
    <header className="header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
    </header>
  );
};

export default Header;
