import { useEffect, useState } from "react";
import styled from "styled-components";

const placeHolder =
  "data:image/jpeg;base64,/9j/2wBDAAQDAwQDAwQEAwQFBAQFBgoHBgYGBg0JCggKDw0QEA8NDw4RExgUERIXEg4PFRwVFxkZGxsbEBQdHx0aHxgaGxr/2wBDAQQFBQYFBgwHBwwaEQ8RGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhr/wAARCAJYAcIDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECCP/EACQQAQEBAQEAAgICAwEBAQAAAAABETEhQVFhcYGREqGx8FLB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGxEBAQEAAwEBAAAAAAAAAAAAABEBITFBEmH/2gAMAwEAAhEDEQA/AOAfTf36fPD/ANWvxF2/d/tNpD/aBt+abZnqFvvnBV2/Zv1UMULb9rqZ+Vn7RD+U2/dWJ8gbTbPmhgq7fim37qaCLbU9/wDUUDSW/dE/0Kv+X5pt+7/aL8gbc7SX8lqURd96W37v9p/IC+57abfz/aGirt+bT2+6dTQNv2S37qKC/wCVnybfu/2i9KG/mm/k4hgu/m4f5flN+CAum3PKc4mCG35tX/K/ZuAG37pbfi0T8cwF252pt+zmf9P0qrt+6bfi/wC0hwRds+f6Nv3f7TAF2m37omgu37Nv3TcOoGmmaAAJALMTd+F1Q50+DdS/gwXE+V5T5UTf7WH6Tmoq3n8p8rp+AT0lLDoAueIIfAqKCp+zbEVbxNVAF4ysA6uJxQTD3Ti9AZ1cUE1emgJwipUFz6TFTqi4mHF/QMkaT9gHT9ioVZfDfs1FSLwS9BUMOgsP4TAQhpkwgp+YYtTvAWILuKhw5pu9LNQS6L/nfx/QVTv4ME+8VFqSr8GRAPkNUCpKtT0E4at4apeJpCnCH7DtPgVU7+ibhFQxUhanqmhOrQQ4YfFUN03w/SILhF7E5wFTVieIHFKioaaXw/YppwAFSLATPVs0SoGfkzAs6odMIUDdXpiAsSLoYCU/gv0BJ6Z9VfktBCHwQBaaTgJmL/aW3CVUa/yogzwRPNDDPyuKu1Oer8HRCJ6qXoL9pDas9FS9TFpuqGnwWG4IYp/KcRTos9CiUw1cBPzS+8N0nAMNOnyC6lgaC6JixANTfVUNRQEhUXv4BYE4S/hBCmGKFP0qSYUISBoF9X49SKgkCDQG6HyguYcBBJ1U0/0qC/CatFSedVOfknqwXRPyqDWz/wCYM5+f9i/Wol/Bq/HqT5QNWiQFQ1cFQnCeIC1FnVNE0/apn0BOl6YcoEqp8+EAqgCTpfAv4AhhKaCKU6CasJ0oHVT49LwC+cWcSr8AyqTrWgTialaAS0TAWX30t+lvGQXwJ9L1AE9iqJOrglAwnTL9GgtIkhQTiqn7A8/KofJ2L3+E4sKIZhU8UE0X37FD4TicWe9RV8M+AwRP9rDAC8TDaaKGKVAE+8MUVKt4yBovUBrom/SaguEUBOJPprEihFS+EAxQiCXqmaKJ0C9AxUlL4BhpviIKEL1Q6smMxoEsMxewQJdS9UwATftYAy0i4BaIouBqoJv4NWGAm9XtTFkBDF/RfBATQikqgCGSG4ogl0JwinwQwhRcZnV0kwFPkTECdKfk1RGmV00ILLqYCkTFkA0OCBomKokipq2IGpxF0EMWKoJ9m6AfIbioJ7VgmAumsrFDtXUw3QSrOGCBFRV0JxKqagLOBvoAysqwVPhf5ZBrqfJFBOm/hQRNF0ICXwpgp3q4mgL8l4mHoFIfJAXElNXQE1dS8Anq4JxA+Ui9TFosVMTgLKoIJ8kqoorLWwBM+jTqYC4eLBBL5xNaNUZ4u0qFF6SnFoAk8EFxOHSKKmYl6ILOqmKCaaCi9GcWdAqLVnEGQnWlGVN/pICwpTfAJTTignn5Db9iovUtW/aT5RSefJxcTd6B1UlUEww30oFMMUEhqwxATpKXwDcN06Z6oqWKIF4kUxQTdVOIGKkLQMVLSLA01cTECo0zVGk4SqgJqmAW4luqYBxNTRYLmkWGIFuCUihuHVwBNw/hcLwEv2YRQSefBn34qYBeH4PFzATBUUWpV+UqCAEFwni6nQMVJMUCpxUoGgZgHTVSfQF94ZThoKJOqglhyVS8BOnykuCjSX3ipxBYkigBqWoC8XRMUUBABMBdEzFl0BOqzOgsVNNBak86atmqDONAJIuiYguiRQSnFT4UKs4ys4CpfVZswFw1ZxMA/khign7P0tTmnYmDQCfCpIAvqaU9Ai4lAXEpmFA+EnWpwQSo0AmqJQN9VknVGsMNEElVmdaAGa1eAlJEX4UUTioCSqAlWJVnALxlZFUIy0yBmLImNRAwNATSKXigMtRBOQheoo0mnwcA8PwW6SoJp1rYaohqp0DaacUAEwFwAuicJ4qYCicNqB04T5KBeItICxNLTFFl0vglQNVIoGJipKC2aJTVDCqlQMW8JwBIvTABIoCYapgJTVMATFAEzFLwCXUwhqhmHU1YgqaWrgMrpSQDtOHCegbipRQwwvhviBhmRRQnEnRcBKfCiB2CSVQMAES8Rd1cVUnFqVQRMaChxOnVkxBPkvqijJjVmgAFmoImKdqhFqVYgziw3VkwAAAAAAGb1pm9aASxQEnVAAqaaBFJdAKkUBLD5VMUKfCoCgIJep+mr6zOqDU4WanECRU1bcA1C/aqJ6pLqUBf0JAX+QBEip8qiiKXgIYmL8KHwT0PQVnVxQZ1qCWASlRcoJpOmNaCVNWogTrQAlpKrM6o0lpViAGgGCfCgCVMUWVRKguGM41VADUE+SqaBCmgJPVGcUaAQTVwZwGtxNiYvFCKaAli3gVBmLUxrcULxJV+U4gb+BdATVlZWfKi5+Uv0mqC9PhIbQN2qzOrQUvCCDMuNGCgW4VJ71A3wwpKC2amFWAJVKBOJizgAACYjRgJppIk6DVmgAmqYAJqszoNWamKAXiRUvnAMVnWgTVS+LOAAAJFTkBUvTaKKSJFQKJVUSUzTC0DFs0LfEEwPRYELAtAiLKWAYsSKCdPTFBJPVTTQL7xBcPBQEAE0F0TFA0TFkwBJFAAtwAS+8W8SAcWpigkUl0BJ0pFtwCJxU3QUJMTQXRMW3AGcaASLqcQFkMVNUWJfVTECRL1pm9UaE1UGb1rUzTMUL+TPo6gLxe8Tp+gUTKECLZodQSzFNT9KKlIt4Cae1akAq4F4glWcSKAMzrQJauGmgAAkqlSAWmqkgFTWgE6qSKAXgAkWpVgMzrQAGDM6C1GksBUqgE4GszoNM1pLAUwACmgM6vVAQhaRQtVLCUFxKogkvqmpfQXP/YJg1UN1ZMRU1UwinANEpwD+FQgLLokVAkxNVmguYsup1QTDFABKmg0W4JQNVnVlBbNAACpANN9XGYDUugloKAAmKkwFtwABKoDK4uAAABLol84Cp2ppOqNJimoMxeGeqomo1iWIKJF0E4aqYob+A9DgUNEDS8RVE4fpaYUE8i1MA6tGdQWHhp2AoAGlTF+QSedUs1NwFD5ANKmGgTzqpSRQkVNVAAAC3ADRmdas0Ga0mGgoAMzrSYoM3rSYaChbiaC6JigGAAaJgKl94vSTATDipur2LqeGLiB/CYpbgJ6Gi0WzxPafKgikEEipYcgLWdWQqixlqcSRAigBUi1ICa1QoJFxnGoCYolBWWoAk96oAYACWqACcPasBk0jQEMGYC1YaAJVvEgLGWozAFipYCiSKAAAlpVnABmLaBak61OCgCIG0t0iqJ4LogmnSoo0CSoLDEpKC6CaCjOtUCzRIoJbiy6YAJpauAS6XxOHYCluACb4pgDNutThifpRSzQQTcNXEmAoAJhFAMTFAZsxqcSpoNJwlUBMP0mg1JgkLQVOpqwFS/Ss6BZi8id6vwCAueAs4mrDATDcKgNJVvGVAayhQ0SX1QS9DNWgl94mLC3AW8SLUgFTGi8AhqRL1Bq8SFIClE0CKAF4kOrJgJYdNMUIWKIAmqBrM6uJOqLUxoQSRQl0EsVNUExYboBomKAAAaW4yC9TFxQICaCmp0wFBOgdq6JmUFT/a2JoHC+huKJg0IJ4U6YBuGkpflQn4VnGognV4H0oM60XiCSpVigAl9BU4sT5AipTgKGmgzetJ1aAJEvQJ1o0twAxNWglWMmKL1TTUDE6qSAqWqADMaAABOrgAVnTFgCRoBL5xUqwC8TV+RQBIgfaLKf8UVKupfwgmi5RZoTpVz1KAXpv2UFiaRcQSdWpCqKm6auIJF0AExazqjXEw7FQExUtBFw4QFAvATUWLgMzrVmpwgI0YAWaJU0Ak1bCAbhqXrWAS6CWgYRbxICgkoKJVgCYSqCbhqXpAWRUviaCrZqSqoRN0tSdQLMWcOqomYaqYBoufgLqJi30TqKBgoqYQ3APYjV4kAynS0nQTBpMBdGVl1BUyqAAmgom6cBQTdBROGgmLDUk0F6om6ChJiaCiaQFAABNAkULNBOromAoABomApokBUsOGgumphF4Fvomqgl94i8PyBppnwYouiYIKJzhv2oW+qJQVPkM0DdXjOLwEW1UgENL6s4CYuYkhUFE4dBWb1YoGBoCcOLpQSe9XEiXoLYRanFC1J1erUBP2RQMAABPAUwZvQaGZ1oAqWHoJrUTVgM6sSdaBLTiVoEnvVxKQFIJQXAiToKipVwPjSfk6YCjP8AIQaTFqUC+U34RrAZX46YeQF+UvqpTBcT8LDEE4apihqauGAmaZi4zqC6upFBMWTABMUSUFTCrACzWdWAoF4BLokUAABMVnQatxM0nvVBMxZdAE1TAEw3FMBmdas0xKBikSUFxMKAqYt4zqi4YsSoFE/SxReE9LxIB4LgUTDDTQWcE1UBNKijRYn8KgzimpOqNcNSmAqfaiAzjUASKW4AVJ51SzQEqpgELFAEqluAQE0CrCXQGY1rM6tBWcanAEigBeJFTiigICWKAJxSzQS+8TGgGcMW3D4UDNReAqfKpP0ClTQBToAGiCQp/wAXVE+D0+VAiUpAWpp+zUCeriReqFJwxJQLSerqUFElXUE6oaCelJCgsSUi6CVYAFSe9CArLReAy1EignCe9UAAAS1WaBqz3qYsgHFZaBKmrVnFBKogzrSWHoFTWk0Cm/asrgukppgLhiYYB+jT0kA0MChxeF4mgUl9XJUBUwigmnfwZC+cBYmJog0mGrASVbNTz4IBhmKAS6mKAmrLrMaUGWk4gsmCQtA1TAAqWqCRQBNVOGgqasMAs1MUAABL1QBOrDPpNA1UnVAEtKB0whVDU+FzxAXq9ScX/oJin7AE4qVBAAaS+m74cAwVNXAnnToTgKlVOgQxS1BIWLBQTFSoGrUzxVE1WbMaiAnFLNBKupwzFFE1UElVMUBJDTQULNAKkN1VEsKogkVNUEwikugliRbSwC+8TFhoLeJDdOAusrmnAJ5006YoS8KYuaUSGYc8UEnyfBxYCQvtTrUmIJk+xcgCfNAUVNOLoIFJvwC3iQ9WARO9XcEEvhvi6Amk9VKCl4mGAX4OCqAGoGJ+z5UEqziX3h+FDVEoLhifCoJVgdBJ1RAWAk6ofo0hYC3iRdggYJYt4CXzi+VIUFxLSRQTamrS3xQistTiAfpMRQaTPsBahFBni7TfMhQMoogn6VN+vCNBTT9HygW6fRVBNJVxAS3Wv4RToT4JwPgFJT4Igb6fJgACWgt4zLjRkBM1UtF7FkxMLfo2oKlJSqHwfJOKCVZxOnANNXDAEnTlLMBRIuoMtSMrFF+U6LgJwv2UnANUwQZvVxL1qqM4v+j9lBSTEl9VBLUU4oHV/YCZippoKJoXQWJ/JQUPhNRF02JFVT4Tfs1aCVU+FBL6sNxAWp03w4CNamaYCpZ6cXfEDRMOAYuACWLOJ1eRROk86cS3QanDUnEBb6sDECpDVAQ06oe1F4ZpQkVIpoMzrSYBfeLEi8BJCqWagkIl8XFFSnP5LARUxqTAT5MwvTUF1N9D4UXoQEBM/IcCpfDi6KkFoCfo9ARf+p+yaRQ/S6mnyiql8XBBIHDvFDimpoKl4jQE/KW/S8TfoFLw+El+wRdUBnRoBPwZF1AXdTfRQSdUvExBL1YftVE/Z7FSwCKkimiWmqIJfwbaX3hii86lqgJ1QoFJxL6oFSX7UQRc1KW+KHOnaSL+gC3iYS4CaLv6/oOAs9PtUBUob9qLv1ME4Ii2z4Ewgpik9QFS1YmeoGGHuKohCrgJTSootXMSKgmfaLen/FFkxM/KpvqBOrWZ1fQM/J8pq5AKS+BJ4Bpq4l84B8qyt8vgB/sn5XCgnVEE4VcTqhFSrATSUvCAp+UtPgCembTfpAWG/g5Cgd/RhPD59BZ6mnAgdFxL4Yi4JoQVF+E7/AF+ieH7FVaJvhEFv5DffA6Q/ZqVcRUhq/8A6mKHhfTCAW+HwWcVRIXqpb6yBikUD5S3F/KCVFpjQcqy/RgyJfDtL0UPC8Lw7BAVKKfonixAL6sSQ0F0TPtQBL4qCQvppqiopPQT3SmlAymEXUE6cPkoKhvwb7qipYup8gU4tTojW/iCZ+w4E/YCh3F+AQS+AIGLaDW9wSeqCCU+QBYlgAEAFToGcigIpiaCgs4BqACBicgLmUO9OAeqaoAIALwzwDwLw+wTxDnUBVPFzQBO0AwFADhAQM88ZBRQF8FSgIuJQQNv0Ao//9k=";

const ImageC = styled.img`
  width: ${(props) => props.width}px;
  cursor: pointer;
  @keyframes loaded {
    0% {
      background-color: black;
    }
    50% {
      background-color: #fff;
    }
    100% {
      background-color: black;
    }
  }
  &.loaded:not(.has-error) {
    animation: loaded 1s infinite;
  }
  &.has-error {
    width: ${(props) => props.width}px;
    content: url(${placeHolder});
  }
`;

const Image = ({ src, width, height }) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const [imageRef, setImageRef] = useState();
  const onLoad = (event) => {
    event.target.classList.add("loaded");
  };

  const onError = (event) => {
    event.target.classList.add("has-error");
  };

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: "0px",
          }
        );
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      // on component cleanup, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <ImageC
      ref={setImageRef}
      src={imageSrc}
      alt={"loading image"}
      onLoad={onLoad}
      onError={onError}
      width={width}
      height={height}
    />
  );
};

export default Image;
