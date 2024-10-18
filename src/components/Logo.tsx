function Logo() {
  /*   const { theme } = useTheme();
    const [color, setColor] = useState("black");
  
    useEffect(() => {
      if(theme === "dark") {
        setColor('white')
      }
      
      if(theme === "light") {
        setColor('black')
      }
    }, [theme]); */

  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="20"
        y="80"
        font-family="Arial"
        font-size="80"
        fill={'white'}
        font-weight="bold"
      >
        <tspan x="15" dy="0">
          M
        </tspan>
        <tspan x="40" dy="0" fill-opacity="0.8">
          V
        </tspan>
      </text>
    </svg>
  );
}

export default Logo;
