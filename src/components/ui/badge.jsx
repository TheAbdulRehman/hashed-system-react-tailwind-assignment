const Badge = ({ className = "", children }) => {
  return (
    <div
      className={`inline-flex items-center justify-center rounded min-w-[80px] text-[#5679FF] bg-[#F2F7F7] p-2 text-base font-medium ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
