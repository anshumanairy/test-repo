// const [suggestions, setSuggestions] = useState([]);
// const handleSearch = (e) => {
//   const searchValue = e.target.value;
//   const suggestionsArray = [];
//   if (searchValue !== "") {
//     rawData.map((element) => {
//       if (element.toLowerCase().includes(searchValue.toLowerCase())) {
//         suggestionsArray.push(element);
//       }
//     });
//   }
//   setSuggestions(suggestionsArray);
// };

// @media (max-width: 768px) {
//   flex-direction: column;
// }

<CardWrapper className="dFA jcC fwW">
  {rawData.map((data) => {
    return (
      <Card className="oS">
        <ImgWrapper>{/* <Image src={simple} /> */}</ImgWrapper>
        <div>
          <Label>Title: </Label>
          <Text>{data.name}</Text>
        </div>
        <div>
          <Label>Description: </Label>
          <Text>{data.description}</Text>
        </div>
      </Card>
    );
  })}
</CardWrapper>;

// const SearchBar = styled.input`
// margin-top: 100px;
// `;

{
  /* <SearchBar
        type="text"
        placeholder="Search Name"
        onChange={handleSearch}
      />
      {suggestions.length > 0 &&
        suggestions.map((name, key) => {
          return (
            <div key={key} value={name}>
              {name}
            </div>
          );
        })} */
}
