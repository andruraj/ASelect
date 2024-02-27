### Documentation

#### ASelect Component

The `ASelect` component is a customizable dropdown select component for React applications.

### Installation

To install `ASelect` in your project, you can use npm:

```bash
npm install ASelect
```

Or yarn:

```bash
yarn add ASelect
```

### Usage

#### Importing

```javascript
import { ASelect } from "ASelect";
```

#### Basic Usage

![Output](wK.png)

```javascript
<ASelect
  value={value}
  options={["Option 1", "Option 2", "Option 3"]}
  onChange={(selectedOption, selectedOptionObject, currentSearchString) =>
    setValue(selectedOption)
  }
/>
```

#### Example with Array of Objects (with keyProp)

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAF5CAYAAADUL/MIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAADvcSURBVHhe7d0JdBR1ovf9HzZpJIGEEAz7kkQMBMIiUREEMyi7XkFAzigzMvAOzBGYM8IziY93xCvcuWO4F/UVnDtkXrjyiPoIoigEBAQjDNsYDJCwBCUgIktYwmKidIj9VodKdyckoRO6Ih2+n3Pq8K/qTnV1hXPql/9az2kQAACAhW4z/wUAALAMgQMAAFiOwAEAACxH4AAAAJYjcAAAAMsROAAAgOUIHAAAwHIEDgAAYDkCBwAAsByBAwAAWI7AAQAALEfgAAAAliNwAAAAyxE4AACA5QgcAADAcgQOAABgOQIHAACwXD2nwSz73fGTZ8wSAAAIVK1aNDNLNUcNBwAAsFyt1HD4IxkBAIDa5c/nODUcAADAcgQOAABgOQIHAACwHIEDAABYjsABAAAsR+AAAACWI3AAAADLETgAAIDlCBwAAMByBA4AAK7DNeMm64PdGAIHAACwHIEDAABYjsABAAAsF5CBo169eiUbAAAIDNRwAAAAyxE4AACA5QgcAADAcgQOAABgOQIHAACwHIEDAABYjsABAAAsR+AAAACWI3AAAADLETgAAIDlCBwAAMByBA4AAGA5Agdq6Iy2frBCC5dc3d7bfsY8DgDAtQgcAADAcvWcBrPsd8dPXv2rt1WLZiX/+kvp0vTXXnqxLp/8Tnu+/kbH8i6pwFGky1c877ktyC777cFq2zpasV1bq/ntNvMVVJ+rhuMf2l94da/RnQ9obG///p4B4GZh1fPsZufP711najgKj2Rp9QdpWvLpl9pz5KzOFTrKhA2Xn4oc+vHSeX114EutWv6Z/nnafAEAAFiqDgSOYp3856d67x+HdKLwJ/OYD5zFulKNtwMAgJoL+MBRuH+b1h38Xu7scFsDRXaI08DBD2vcL0do4jhzGztYYwbcrbvvjFDj+lebZAAAQO0I7MBRfERbdp9Rkbl7W8MWevBfhurRB+5SuzsaqYF3F42ghgpt1U49e/fTE2Me0oA7m+h28yUAAG5WL730UskW6AI6cBQfPKZjV8wdNVBM7966s5G5WxVbI0X1vk93Nzf3AQC4Cf3bv/2bewv00BHQgePshQJPU0qDZopqbZYBAAhw5UNGafAIVHWg0ygAAHVLZTUarmOBGjoCeh6OMzvWasVBcyIINVTngYPVx4JmkqL875S99ysdOvG9Ll2+Ytaq3KagBg3VpGVr9eoWq9ahPs7pUXxZp44cVM6hPB2/8IN+cJ/POGOQXY1DIxUTd5e6tg9VkHm8Qvv/oYU7S2f3bKa+4x5QJ6NUfPFb7dx+QAfOFKjIOPFt9UMV/9AAJdxx9Z3XKtL5bw5r39ff6ui5ctdTP0j2hiFq276junVprSZlLqjyeThK7teeA8o5VagfHMUl53Odq2GjZort3kXd2jYSM6AACCS1OQ9HZWHD24svvlgrwYN5OEwRrZsaMaPUD8rZlqmTxeauPxTna++GtVqS9oW+PHJeF7wexjJKRZcLdNoID5+s/EQfZZx0d16tWKG+ydis995bo1XbDukr18RkZc53dZ6QC2eP6cvNG/Xuquxqf5fiE5n6YOVOZeVdDRsuP10pksP7Q7wU5R3Uug/WaPnmfdp/ooLrMX62ZN6S7C+01h1uqlKk4xnGtbvu17euideuhg0X17kKzp/Ql59v0LufHjLuBgCgPF/Chksg1nQEdpNK665KaFHf3DEeat9/ozUrtmjvWT+kjuI8bV25SdtP/OB5CN9WX7cHN1bLyMYKaVDfc/OcRTpzYIdWbM9T5Z98QvsOnNX3Xk9011/9tzcI0R0tmyisQZC8R+sWnf9a6zZW48H8/SGt2/SNLvpUX1Wsc3s+17vr9ulb77lL6tnUoMHtahoZoabBdt0eVJ3/Hj/p5PbPtPbAxZLgVfLdGjfRHY3talBmGLJTl09mK63KewUAtx5fw0apQAsdgT+1+fdH9Ona3frmB++vcZsateykxL4xNZy+vFC7V69XxjnznLc1VNtuCfpF14iyzRxFZ5X9+Rf64uSPZiipr/b3D9XDMRV95iGtWZKl48a5WkbfqZ7x7dQypFyjSdFFHfjHVm37rvR8DdTxF0PVv6LOsOWaVDp2uKSvjjjUILyd7u8dpw4RDWQr+kEn9u7XqdZ3q4dXk0qh8bPvGz/rHk5sD1NMt266v1O572coKjilQ5n79VWDrnr0Hu/fY9kmlZCwxnJcuKSioFB1vude3Rft3WxSpPOHdmn99u88gaheuO59/EHFe6qoAOCmZXWTSnXDhjcrm1doUvHWqIMe/pf7FN/EU9Ph+mv7+xP7tGr5ai3dsE/fXaze39Lnd27Tl6VhIyhcCYMf1qDyYcMlKEJdH+6v+5uXfvYVfbN3n86be2XVU8M77tJjYwZrWO+Ya8OGi/Gw7vSLBMUGm/u6rMMHj5rlquTr8LHLCmreVY8P76kYV9hwHQ4ywk2PsmFD57L1yZdeYaNROw0e+Qv1ryBsuASFNFenBxLLhY1rFZSEjWbqO3yA+pQJGy5BahJzj4b3iDAimcmZr6/2XTJ3AODWdSNhw8X1szfy87Ul8AOHS1AL3fvIYD3WI1KNvL+Rs1iXTrj6WLiCx0GdqbqTxVXFR5Xx9SWzhsGmFl3vUfeIqmpJgo0HckdFlrYaXMzT1xfMchnRShwcp2YVPdXLaKau7RubZSPCXMjXWbNcuWJdqddCDwyIMa6mKsX6etdh5ZfWMhj37cFH71ar616TL+qrfcL96lTFPCjBXToqymu2tQv5LGYD4NZ2o2GjlL/OY6W6EThKBKlZ1z4aO6af+nZooobXBI99+mhpmtJ2nXX/dV+hI8f1Xekbgtvoni5VP8JLNGyllqFmWZd06tiN9U4IDW5glgw//eRTX4dG7e9UdFW5yOWHr7X/ROnZbGrVrcf1f8ZXwa3VrcKmJG8tFNXcbpZdfW4u+RCmAKBu8ndIuNlDRx0KHKagiJImgCcrDB5FOpm9We+uOaBzlTzFvz1+TqWTl95+R3NFmuWqNVYjr7/cv7+Ub5aqUqzLFy/p4vGj2rs3S5s2bNXqVZ/o7WWr9D8+jQjxZleLVj60rx09ozOltRv1m6njXf6b3N3XexVWgzAFAHWNVeHgZg4dgd9p9HqKzurAjj3K+OaCLnu9/bbGURr6SHe1KPdH+YH1K7TllLlTQ7e16KbfPBxt7nkr1qVvc/TF7qP69sKPKrd6fsWC2+vRx3te+zAv02k0Qr1/2U9drlPBkLd9rVZ+/cPVnaad9NSwTjewnkzl83BUyfu6K/tuAHCT8efzrDZCgb86ktJptDpKajx+oV8O6aI2DT3DM3+6dESbr6lJOKNzfujH+FNFQajopP65ao2Wfn5Qh89XFDbqqb7dXjKUtE0Tr1oAn9STzYemke9/cJgl4xfv+iyzDACoHbVVA+H6DH8EDn+q+4HDZIvoqMGDu3p1kHTqYu5X+rqKOv2r82QYD+bqbvbyT/8z2p62Q1nnSxtrjHDRqIk6dopT4oCHNGbkcE0c95iefmKYnnosUYNjPJ1G/clxxfNl7Q2IGwBQm2q7ueNmCx11v0mlnOL9/9D/2XnGPQql/f2P6uGYkh1DsfauXant5uAJn5sJruPHrM/17u78q59ZL1h33t9HD1wzdNSLL80OZZpUPFObVyX3s5X67DszdDSP18SB7i9eAzSpALh1WPU8u9nRpHIDbK2aKMwsuwJGkaeVwWBTQ6/aiR9/8McE3D8q51szbBgatu+mB6sKG4bin6zJgGEhXk01ly7opFkEAMBqt1zguJ5WEV5zYJw5pW/Ncs19r4IfzaIhPKKFWarccX90JKlARItwT7+NwlM6+J1ZBgDAYrdc4Pjx6Fl55uVqqLCmZtF0e/tmCjfLunxcmXv8UctRDd9/pT3flal28Z92bdXWnTgu69DuAyyiBgCoFQEdOA5u+kybDpzWZR8ncyi++JU+2+dp3tDtEepQfjn7sDsV17y0wcOp01n/0Fb3ZFlVKdQ323foy2uG1N6m27zuct6JI5XPPVH8vfZuy9HJ0r6lftdCCXc1cf/SfzqXo7TNxwgdAADLBXTg+OnyBX2VsUVL3lujD9dl6Iuc73Tm/A/lZhItUuHp75S9fbPeX7VXx90v1leb+K5qZe553K5OvaIUXjqC1lmo/Rs/0Ufbv9H5iqYodS2QdiBDK9//VJ9+fV5erSempmrXzNN34srxbK3c/q0ulUsdRfnfaNOqjdp+6ooa3l7dYbG+C+52r9faL05d/CbDuC8ZOnDycoVBqCj/O2V+/qnSc8wDljOC2z82aPHbK/Q//3edNn5dQRwqztfudWv0P0uM97yfrowKAmHhkQx98H8/0sK3V2rp50cIVQDwMwvoUSr7131Yw0m66iui8716tFdkpZ03C7/ero92nFRhmbtzm4Ia1Pf6mZ/kuHzFU2Oihuo8cLD6lK81+f6Q1qRleYUdg2up+9Ll33+6oh+Lrp7ltkbtNbRjgdIyrzOSowajVNyK87R91XbtveS5chfXMGC7zTNXibO4SJfNCUNa9RqhoZ1LiiaLRql8l6F3Pjsmc3oy45d9h/o91Vd3mbsuZUb9uDSK0ogR3RVh7konten97frKnf7qqc09j2lwrLkLANXEKJVbfJTKbWbwqI7bbm+izg8M0IgqwoZL8J29NToxRs3s3p/xk4ouO/Sje/MKG/WC1OzOOMVX9DtpFKNB/e9UhPciaa6QUXqe0rDRuI0GPNxTLaz+rdgi1fuRAerXNlj1vb7eT1eKvL6bwx02XA9s72YhS/14peq1bgwOh3fIq4hDxlsAADeRgA4cdz08TL8ccLfuvrOl2kSElEy61cD7CWq4Lch+dfbODjFKfHiofj06UX06+LAgmyGodbwee2KYHktoryjX+UtrJEpcnRk0LKKlOve4R6OeGK7HerdV40pSjK1lV414vJ/63hmppsH1PTe+nk0NGkeoc0I/jXssQe2rWG3Vr2yNdNeDgzRuVF/zmuwq8/VcNTDBjdXWCFEDhw+rvdqBmG5K7NC4JAjdVj9YUff1LFO74RLa424lRDYouYeuANn9vq5etRsu7dSndxuFu05i3N/GbburH7UbAPCzuuUm/gIAoLpoUrnFm1QAAEBgIHAAAADLETgAAIDlCBwAAMByBA4AAGA5AgcAALAcgQMAAFiOwAEAACxH4AAAAJYLyMDhmmGUWUYBAAgc1HAAAADLETgAAIDlCBwAAFyHa/GyW23hNn8jcAAAAMsROAAAgOUIHAAAwHIEDgAAYDkCBwAAsByBAwAAWI7AAQAALEfgAAAAliNwAAAAy9VzWrgK2vGTZ8wSAAAIVP6YZZUaDgAAYDlLazgAAABcqOEAAACWI3AAAADLETgAAIDlCBwAAMByDIsFAABVYlgsAAAICLVSw+GPZAQAAGqXP5/j1HAAAADLETgAAIDlCBwAAMByBA4AAGA5AgcAALAcgQMAAFiOwAEAACxH4AAAAJYjcAAAAMsROAAAgOUIHAAAwHIEDgAAYDkCBwAAsByBAwAAWI7AAQAALEfgAAAAliNwAAAAyxE4AACA5QgcAADAcgQOAABgOQIHAACwHIEDAABYjsABAAAsR+AAAACWI3AAAADLETgAAIDlCBwAAMByBI46JG/9VPUMqa969UPUc+p65ZnHAQD4udXhwFGo0zs+1uwpQ5QQ1VwRrgdxvXrurUFYc0UlDNGU2R9rx+lC82cC2T69Pu0N7SoslooLteuN32nubvMlXMtxTEufaqv69WKUzH0CAMvVwcBRqOzU8ereLFSRvR/TzL+u1c4jeTrnehB7cVzM05Gda/XXmY+pd2SomvWdqmU5DvPVuuAHFRSYRZRRmJ2qkTEdNPadYyr7vwIAYJW6FTjy1mtqfLjiJy/WnrPVeZQU6+zWN/REl1bq+5cM3TSxo/CwNv49WaMTWmrMEvNYpeL0+3lT1CPYJtmC1WPKYs3sY76Eqwqz9c7UvmrXY7JWHCNqAEBtqjOBw5EzX7+4a5DeyPaKC8aDt+PQJKVuyNax/MtyOp3mdln5x7K1ITVJQzsGy3hEX1V8Vluf761uk2+G/g+7lRwfrYcmzdHynSf1g3m0KpED5yuz4IqcVwqUOX+gIs3jtzwjuH00a5iiw+P11BtbVa0sCgDwi7oROPKW6PH7pin9grlvCLs3SauP5Ovg6hT9dkAXtW5iN19xsatJ6y4a8NsUrT6YryOrk3RvmPmSipWTOlT9k2+img7UiCNnmZJHd1ez0GiNeHGNDpf+QsPC5P51AwBqRR0IHHmaP3q80txhw6bYSet0cEeKhrbxDhmVsavN0BTtOPiWhnuHjrnj9EIGkSOQ7V/0nOYs31OmRqMkiGa/ogfMfQBA7Qj4wJG/ZIKe2+x5ooQNf1ObFtSgOSFynD74NEmxpe0rxTmaO2muDpm7CGz2Fg8qaUWujvscRAEA/hTggWOrXkhKk3swRtgILXhrXI37LtgTUvTejGhzz8gcmfP06lZzB4EnKFStez2tuRtylX8iXSmPRSnYfAkAULsCO3CkL9bSE2bZED/9vzQ23Nypoe7P/VGJ7l6kJ/TmG6vMclm7k2M883rEJMszlUOhst9xjSyJUliD0nk/6iskIkoJo5P1TnYVc34secRzzno9NCfXPG5I+1Xpcc/2SLmRK5VfU9UKD2/UK+Z8JZ5rNrYGYWoelaDRyX/XxsM+zlVS5js8IvclOs4rM3WKHuwSoZD6pa83UJjr/LPW6JgFrVfd/z1TxzLe1PQBBA0A+LkFdOBIf/dDnTbLsiXqmWkx5s4NCJ+giUPciUMF61cq3Sxfj+PYUo2PDlf8U66RJUd00f0QLVbhuSPauXyOnooPV/T4pZY8YKvLcWyNkvs2U2j0Q5phzlfiuWaD46LyjuzU8jmT9JDxvaLHLFJNpipx5CzSyJhmunvyX7Vp3zl5pkRx6KLr/C8OU4dWgzS/Ts2DAgDwFsCB46i2feGOG1KfUTdcu3GVXcOHeE1gcfoLbTtqlqviGinTdawWlwyFsCm4aaQ69Bqswb06KDLUu8+AQ4cXj1XXx5dcO/S2YYQiIyPNralcU2qUsoeWHvdsEQ3NF2vAkfEn9YoZpjlbz3omv7IFq6lx3rj+j6t/nPEZ5a/7/Ynq0m26tlVnYtaSEUQTzXkv7AqN7KBe/XupQ2SosedRfHa9pt33G60icwBAnRTAgWOPsg+aRUP7hN7yS94whHftrDvMsnRQ2XvMYqX26t/6u0bK2BQxcJY2f1uogrOndDjjE32ScVinLlxWQdYCjY7yPGIvpI3XkL+U65I6arFOnTplbhs1tb153DDwjdLjnm3xKPPF6sr7mwb3/bPcU5bYozR67mZ9W1igs8Z5936+XJ/vNT7Ddd25GzR3RBv3XCXFOa+q35D5Ps5TclSvDHHdF7uiRi9QVsFlXTh1WBmfZ+jwqQu6lP+5XvKMRzZuyjt6/mW66QJAXRTAgeO8LnhN3R3btZtZ8oPwJmpsFqUCXThvFiuTm6YVOcY1PLtZR9e9oAcqGAUR3HWSlh3YoiTPMBhl/vl5fVjrf9Ef0l+GTFV66eeGJWrengNaNv0BVTR4IzhqgKZ/eEjbk2I9oWPzc5qwJN/cq0qWMjON+5K0RQeWTVLXch0p7E36a+bmT/Wsp5+usv72quinCwB1T+AGjt1Z2m8WXYLsFTwta6pzrO40i76y9XtNm165v+rOifYEpaTNVLy5q4LlWri0dhOHY9VMpWSWNqK01KQVazU19nr3zq6ElE16rV9p5ChQ2px5Pg0ZtvWcrbSUhDLNJ2UY9+SFPyZ6Zns9sVWf+9KEBQAIKAHdadQyRngJMou+uUMTZ031bThuzDRN6meWVaz0NevMcu1Y9+5HKp0jzZY4Uy8n+hrUIjV11kRPU1PWCi29bjCwacj0GbpeV97wYYPkqZ/ypQkLABBoAjdwhDexbnrqcrUn1xUyUI8mmuXrCteA/rFmWSrYuV37zLL1MrRxi6cdqs+osdXr95L4qAaGmGXt0T+3mcVK9dGQ4T4EmnbRau+u4vChCQsAEHACN3C0a6tWZtFlf5avs074IP+8LplFKVpd3G0glWjeRm3Noi/iOnk12BQVqcgsWu+ADn5jFtVeCb2r2802WlFtzKKKjXt+vagUqiY+fUQn3eXVQRYAUPcEcJNK2YdU7q6dfltsLT97v2d+D92p2M5mMdCVqbm5XcHVng0rTmWzUu1FJQBAYAvgwJGg+3q66+GlLWuV5pfE4VDaJ17jJHom6mE/9ke9eQQrpJFZBADAYgHdaXTkqCGe0Q0Fy/X6Il+Gal5H/iIt/MSzGFz0wGFqZ5b95ei3x82SISiomh1Ub0C7tmptFqULOl/t23VU3pce5lt7CQAAgR047E9M1Ch3J8Zipc96zjO/RI04lDH7P5XuzhvxenpSd7PsLw5t2uIZhmHrHK84s2y58A5q675fudq1s7o3y3uytRB1jvd3FAMA1FUBHThkH6nnp3jNGnUiVU9OS69xXw5Hxgsa97pnxbSQJ17Sc74sz5K7TZt9rS1wpGmlJ9Goz0ODzFJt6Kt+93iaoTa8tUjVquRIX6n1pYNcbPeoX1+zDADAdQR24DB0n71Qk1qaO4YTqYPV608Z1Q4djpz5GvzwHOWUZoGQQXp93sjKJ6wqY7Nefdm3UTKH5s7WcvdDO1FPPuVbs0SRwx8dVMI1dmw/z4yh6bP0nM9VQnmaP3OhuzNtyKjfawItKgAAHwV84JA9UfM+TpJ7xnAjamT/ubdiRqaqqpXgPQqVnTpGnbpNU3rpjFgK0/C/vaUJPs3kdVXu3LGavL7qFUYcGcka/kKme7G0lhNfrOKhHeTq3uGWucM/E36H/+41zXBXCp1Q6ojBPqzS6lBGcn/9YbN55bZY/eF5X8MYAAB1IXAY7Akp2rTsSbVxh45iHVsxWfHhLZUwfrY+3vGdzpd5phbq9Dc79PHs8UpoGa74ye+rZJHXEmFKnLdDH4yrRtqw2WQrzlHq0Dj1Tf5Ih8sHHcd5ZaaOVExvrxqUsBF69eXEKh7acerdy93hQqcXztBsvyzf3l2z3/MKaBfSNa1bJ415ZeO1120oPLxRr4yMUe85OWZQsil2xhLN9HfXFgBAnVYnAodL5Mi3lbP5JfWJ8PRRkOOkdi6eqcd6t1F4g3qqV690C1Fkh956bOZi7Tzp9RC3d9WUdQf12dTY6v313v73SnUtblZ8VlvnjFB0aIgimjdX85ItQiHB4bp78gqVrNDuYnzOv3763nWX039kyni5W4uKv9TMTo0V5j5vmMYsMV+rpmsCmuOw3p/xkKJDGnid39jCGigk+iHNWHHMEzYmrdGmqtZGAQCgAnUmcLgE3z9TW44f0eqkB9WiOk9EW7A6upZPz8/S/IHVqNlwC1KvlE1aM6Xr1QdxcaHO5eUpr2Q7p8LSoGGwR43Wwj079e8JPlxgn9lKfdqzNLyraeOi+7wX9YN5tCZKAtquskvmlz2/sV30DmNRGr1wr/YsGOjbmjEAAHipU4GjhL2Nhqak68SlfH350Sw9M7iXOkQ2VbBXxYcrYDSN7KBeg5/RrHc3KPdigQ5WsHx69URq4Pws5We9raShcWrq9YH20EjF9X9GczfkKj93mSZcd3XWUuF65M0c7Xo7SUPjvL6D6/rj+qt/lLlfQyVL5ufmK3dDqpJGue5TqFfNhU3BTV3X/Wslvf2l8i/latmEatb8AABgquc0mGW/O37yTMm/rVo0K/m3LtmdHKMec8whtNFJ2nUoRXRrAADUJf58jte9Gg4AAHDTIXAAAADLETgAAIDlCBwAAMByBA4AAGA5AgcAALAcgQMAAFiOwAEAACzHxF8AAKBCTPwFAAACCoEDAABYjsABAAAsR+AAAACWI3AAAADLETgAAIDlCBwAAMByBA4AAGA5AgcAALAcgQMAAFiOwAEAACxH4AAAAJYjcAAAAMsROAAAgOUIHAAAwHIEDgAAYDkCBwAAsByBAwAAWI7AAQAALEfgAAAAliNwAAAAyxE4AACA5QgcAADAcgQOAABgOQIHAACwHIEDAABYjsABAAAsR+AAAACWI3AAAADLETgAAIDlCBwAAMByBA4AAGA5AgcAALAcgQMAAFiOwAEAACxH4AAAAJYjcAAAAMsROAAAgOUIHAAAwHIEDgAAYDkCBwAAsByBow7JWz9VPUPqq179EPWcul555nEAAH5udThwFOr0jo81e8oQJUQ1V4TrQVyvnntrENZcUQlDNGX2x9pxutD8mUC2T69Pe0O7Coul4kLteuN3mrvbfOlWVnhYG1+Zoge7lPs/YISyiKgEjU5+R5nnHeabAQBWqYOBo1DZqePVvVmoIns/ppl/XaudR/J0zvUg9uK4mKcjO9fqrzMfU+/IUDXrO1XLcurSg+cHFRSYxVuSQzmLxig6PFoPzfirNu0r93/ACGXnjuzU8jlP6e5mrdR31jbjfw4AwCp1K3DkrdfU+HDFT16sPWfLBoyqFevs1jf0RBfjwfOXDONRdZNw/XX+92SNTmipMUvMY5WK0+/nTVGPYJtkC1aPKYs1s4/50i0nX6vGx6jLxPd12OuXaQ+NVGTk1a2p6z6VKj6rrS/2093JN9HvHgDqmDoTOBw58/WLuwbpjWyvR4bx4O04NEmpG7J1LP+ynE6nuV1W/rFsbUhN0tCOwXI/elwPnud7q9vkm6H/w24lxxt/nU+ao+U7T+oH82hVIgfOV2bBFTmvFChz/kBFmsdvPUe1efMxI0YabBHq9vQCbc8r0OULp3Tq1NXtbEGh8r9coBFtSn/7xcqZ87B+s4rIAQBWqBuBI2+JHr9vmtIvmPuGsHuTtPpIvg6uTtFvB3RR6yZ28xUXu5q07qIBv03R6oP5OrI6SfeGmS+5HjypQ9Wfv3YDnr3rFOP/wHHtfnOS7rsj2Dxayvg/0HOSPsxZo9+0NA/pgt6b/boRVwAA/lYHAkee5o8erzR32LApdtI6HdyRoqFtvENGZexqMzRFOw6+peHeoWPuOL2QQeQIVHcMnac9O+df//9A8EDNnZnoruUq/ufH+jjf3AEA+E3AB478JRP03GZPf42w4W9q04IaNCdEjtMHnyYp1v3kydHcSXN1yNxFIOmu/zV/qmJ9yZuG8Am/0kNmWfpO31LFAQB+F+CBY6teSEqTezBG2AgteGtcjfsu2BNS9N6MaHPPyByZ8/TqVnMHdZfdriCzCACwRmAHjvTFWnrCLBvip/+XxoabOzXU/bk/KtHdi/SE3nxjlVkua3dyjGdOh5hkeaa8KFT2O66RJVEKa2C+Xq++QiKilDA6We9kVzH4cskjnnPW66E5ueZxQ9qvSo97tkfKjVyp/JqqVnh4o14x5yvxXLOxNQhT85K5Kv6ujYd9HDRa5js8IvclOs4rM9U1H0aEQuqXvt5AYa7zz1qjY7ReAUCdFtCBI/3dD3XaLMuWqGemxZg7NyB8giYOcScOFaxfqXSzfD2OY0s1Pjpc8U+5RpYc0UX3Q7RYheeOaOfyOXoqPlzR45feFA9Yx7E1Su7bTKHRD2mGOV+J55oNjovKK5mrYpIeMr5X9JhFqslUJY6cRRoZ00x3T3bNh3FOnukwHLroOv+Lw9Sh1SDN/7nmQdl3QF+bRam12rYziwAAvwngwHFU275wxw2pz6gbrt24yq7hQ7wmsDj9hbb50qbvGinTdawWl0z8YFNw00h16DVYg3t1UGSod2cChw4vHquujy+5duhtwwj3PBGRkU3lPVWE9xwSpVtEQ/PFGnBk/Em9YoZpztazV4ePutiC1dQ4b1z/x9U/zviM8tf9/kR16TZd26ozQ1bJCKKJWnHM9Sl2hUZ2UK/+vdQhMtTY8yg+u17T7vuNfo5RqYfe/1g5ZlnR96ufX/4fAQDKcFrouxOnSzZrrHQ+GSKn6yu4tvbPfmEe94PPJjnvMM8rhTifXGke97IrKdr92Yoe7hwRazPKNmfEwFnOzd9eNt/lUZC1wDk6yu75GeO9Pf/ja/PViuxyJkWXvlfO4W+Zh6tQ9pqSjDNU4tR/OxPtnnPLHuUcPXezs4LLdhbkbnDOHdHGaWQf9/tt/eY5T5mvX+Ot4Z7zKt7Zs6frvtidUaMXOLMKzPeYLud/7nzp3jCv98sZ/1JV98QClz9zTmr5M34+ANzE/PkcD+AajvO64DV1d2zXbmbJD8KbqLFZlAp04bxZrExumlYYfyLHPrtZR9e9oAcqGIoZ3HWSlh3YoiTPMBhl/vl5fVjrf9Ef0l+GTFV66eeGJWrengNaNv0BVTSCNDhqgKZ/eEjbk2I9Q0c3P6cJS3wZO5qlzEzjviRt0YFlk9S13FQY9ib9NXPzp3rW009XWX97VbXXT7dQH/5qhFJL+wGFPan/eM4PzXIAgGsEbuDYnaX9ZtElyF7B07KmOsfqTrPoK1u/17TplftVfnqpMuwJSkmbqXhzVwXLtXBp7SYOx6qZSsksbURpqUkr1mrqdceP2pWQskmv9SuNHAVKmzPPpyHDtp6zlZaSUKb5pAzjnrzwR888GDqxVZ/XyrBUhzKS79aYpeYELrZYJX36P3rEj/+NAAAegT1KxSrVHiZ5hybOmurbcNyYaZrUzyyrWOlr1pnl2rHu3Y9UOkeaLXGmXk709QkbqamzJhrf1JS1QkuvGwxsGjJ9hq5XZxA+bJA89VMHlb3HLFomT+snd1PvOTlm/5UwDX9zk1ISSBsAYJXADRzhTYzHhEXK1Z5cV8hAPZpolq8rXAP6x5plqWDndu0zy9bL0MYtnnaoPqPGGldTDYmPamCIWdYe/XObWaxUHw0Z7sNDvF202rurOHxowroReeuVfN9dGpRqhg1bGz35wUGtGnfrrjwDALUhcANHu7ZqZRZd9mf5OuuED/LP65JZlKLVxd0GUonmbdTWLPoirpNXg01RkYrMovUO6OA3ZlHtldC7usMxohXVxiwaj+v9WdeLSqFq4tNHdNJd7c2iZRw6tmaq4tsO0px/Xq3jsUUM1Ly9h/T2SMIGAFgtgJtUyj6kcnftNB4p/pGfvd8zv4fuVGxnsxjoytTc3K7gKjucVCROZbNS7UWlG5On9VN7KWbYG7q6mLBdUaMXau/xdT70XwEA+EMAB44E3dfTXQ8vbVmrNL8kDofSPvEaJ9EzUQ/XyWdSsEIamcW6rHCbZrmaUN7IvhpI7V01ZfUhHVg2wee1VgAANy6gO42OHDXEM7qhYLleX+SHZT7zF2nhJ+6psBQ9cJj8PfHk0W+PmyVDUFDtrePRrq1am0XXUuznq327jsr70sN8ay/5+eSt1+S7++lFswnFtVz9um+zNH9om8pHzQAALBHQgcP+xESNcndiLFb6rOc880vUiEMZs/9T6e68Ea+nJ3U3y/7i0KYtnmEYts7xijPLlgvvoLbu+5WrXTure7P2KPugWVSIOsffxHOAOzKU3H+oUnNcv0ybIkYs1KGd8zWQ7hoA8LMI6MAh+0g9P8Vr1qgTqXpyWnqN+3I4Ml7QuNc9K6aFPPGSfJoHKnebNvtaW+BI00pPolGfhwaZpdrQV/3u8TRDbXhrkapVyZG+UutLB7nY7lG/vmb5puNQ+rR/0ZySsCGFDX9T+z6cUOHEZgCA2hHYgcPQffZCTWpp7hhOpA5Wrz9lVDt0OHLma/DDc2Q+o4y0MUivzxvpY9X7Zr36sm+jZA7Nna3l7od2op58yrdmiSLHDVXdmMI1dmw/z4yh6bP0nM9VQnmaP3OhuzNtyKjfa8LN2qJyaK6mLzSnDw17Uks+GOfbHCkAAMsEfOCQPVHzPk6Se8ZwI2pk/7m3YkamqqqV4D0KlZ06Rp26TVN66YxYromg/vaWJlTjKZU7d6wmr79mObYyHBnJGv5CpjnZlNRy4otVPLSDXN073DJ3+GfC7/DfvaYZ7kqhE0odMdiHVVpds3L21x82m1dui9Ufnvc1jNW+Q2+/q9LJVNtPeJbZQwHgJhD4gcNgT0jRpmVPqo07dBTr2IrJig9vqYTxs/Xxju90vswztVCnv9mhj2ePV0LLcMVPfl8li7yWCFPivB36oDoTQdlsshXnKHVonPomf6TD5YOO47wyU0cqprdXDUrYCL36cmIVD+049e7l7nCh0wtnaLZflm/vrtnveQW0C+ma1q2Txryy8drrNhQe3qhXRsZ4zcppU+yMJZrp764tfuPQ51uyzLLU9e4EswQA+FmZi7hZwtrVYq9VsPUlZ58I1+qkntU/q7XZuzqnrKt0HdQyyq7M+qxzYVKsZ0VVW7CzaWSkM7Jka+oMtpnHSzfjc/71iwqWZi1vyxRnS++fk90Z6j5vqHN0uRVkfV4t1nDqgyedRkDzOrdr8z6/sYV6r27r2mzO2EnrKl8p1qXMarHDnT4scmuo/sq4lSt7Lnuo1/epxvbr983TAcAtjNViKxF8/0xtOX5Eq5MeVIvqVKPbgtVx9AJl5Wdpfo2GMQSpV8omrZnS9WqNRXGhzuXlKa9kO6fC0loNgz1qtBbu2al/92Xdjj6zlfp0G8/QX+Ov94vu817UD+bRmogc+bZydi3Q6Cjv6/A+v7Fd9KpRsUdp9MK92rNgYED1h3Bc9Po+1djO3sjNBQBco04FjhL2Nhqakq4Tl/L15Uez9MzgXuoQ2VTBnqd2ScBoGtlBvQY/o1nvblDuxQIdrGD59OqJ1MD5WcrPeltJQ+PU1OsDjb+yFdf/Gc3dkKv83GWa4POMU+F65M0c7Xo7SUPjvL6D6/rj+qt/lLlfQyVL5ufmK3dDqpJGue5TqFcTj03BTV3X/Wslvf2l8i/latmE2Ju23wYA4OZWz1XNYZb97vjJMyX/tmrRrOTfumR3cox6zDGH0EYnadehFN203RoAAKgBfz7H614NBwAAuOkQOAAAgOUIHAAAwHIEDgAAYDkCBwAAsByBAwAAWI7AAQAALEfgAAAAlmPiLwAAUCEm/gIAAAGFwAEAACxH4AAAAJYjcAAAAMsROAAAgOUIHAAAwHIEDgAAYDkCBwAAsByBAwAAWI7AAQAALEfgAAAAliNwAAAAyxE4AACA5QgcAADAcgQOAABgOQIHAACwHIEDAABYjsABAAAsR+AAAACWI3AAAADLETgAAIDlCBwAAMByBA4AAGA5AgcAALAcgQMAAFiOwAEAACxH4AAAAJYjcAAAAMsROAAAgOUIHAAAwHIEDgAAYDkCBwAAsByBAwAAWI7AAQAALEfgAAAAliNwAAAAyxE4AACA5QgcAADAcgQOAABgOQIHAACwHIEDAABYjsBRh+Stn6qeIfVVr36Iek5drzzzOAAAP7c6HDgKdXrHx5o9ZYgSoporwvUgrlfPvTUIa66ohCGaMvtj7ThdaP5MINun16e9oV2FxVJxoXa98TvN3W2+dMsq1OGNf1fy0w+qS/MIhdQv//sfreR3so13AQCsVs9pMMt+d/zkmZJ/W7VoVvJv7ShUduozeur5Jdpz1nj4+sSmiD6/038vekVjYu3msUCzT3/q1EV/zjF31VJTthzX/D7m7i0mP/1PGvnL/9TnJx3mkcrZIvpo5sr1mnl/sHkEAODiz+d43arhyFuvqfHhip+8uBphw6VYZ7e+oSe6tFLfv2To+o+oWlJ4WBv/nqzRCS01Zol5rFJx+v28KeoRbDOeoMHqMWWxZt6iYcPl6Jp3y4QNe2ikIiNLt1B5x8ris1v1Yr+7lZxx0/zmAaDOqTOBw5EzX7+4a5DeyPZ6aBgP3o5Dk5S6IVvH8i/LVZlzdbus/GPZ2pCapKEdg2U8oq8qPqutz/dWt8k3Q/+H3UqOj9ZDk+Zo+c6T+sE8WpXIgfOVWXBFzisFypw/UJHm8VuXXVGj52pDboEuXzilU6dKtwu6XJCrFUl9FFH6yy/O0Zx/ma6t5i4AwL/qRuDIW6LH75um9AvmviHs3iStPpKvg6tT9NsBXdS6iffftHY1ad1FA36botUH83VkdZLuDTNfUrFyUoeqf/JNVNOB6rujn17amq/cZdM1IKqCppLgKD2WskX7UgcpxDykE2/qjVVmGQDgV3UgcORp/ujxSnOHDZtiJ63TwR0pGtrGl/4YdrUZmqIdB9/ScO/QMXecXqCKPWB1/19v+tQnI3LC/9ZTd5g7KtD2zbd8T1sAsETAB478JRP03GZPf42w4W9q04IaNCdEjtMHnyYp1quKfe6kuTpk7qKuSlS/e80iAMAyAR44tuqFpDTj71JT2AgteGtcjfsu2BNS9N6MaHPPyByZ8/QqjfoAANywwA4c6Yu19IRZNsRP/y+NDTd3aqj7c39UorsX6Qm9WUmj/u7kGM+8HjHJ8lTEFyr7HdfIkiiFNSid96G+QiKilDA6We9kVzHrw5JHPOes10Nzcs3jhrRflR73bI+UG7lS+TVVrfDwRr1izlfiuWZjaxCm5lEJGp38d2087ONsFWW+wyNyX6LjvDJTp+jBLt7zYTRQmOv8s9bo2M/WenVU3x43iwpR737dzTIAwJ8COnCkv/uhTptl2RL1zLQYc+cGhE/QxCHuxKGC9SuVbpavx3FsqcZHhyv+KdfIkiO66H6IFqvw3BHtXD5HT8WHK3r80p/xAevhOLZGyX2bKTT6Ic3461rtPJLndc0Gx0XlHdmp5XMm6SHje0WPWaScGly3I2eRRsY0092T/6pN+87JNTfZVQ5ddJ3/xWHq0GqQ5tfk5DfIkfGa/r9McyfsMf1ykFkGAPhVAAeOo9r2hTtuSH1G3XDtxlV2DR/iNYHF6S+07ahZroprpEzXsVp82PXQtCm4aaQ69Bqswb06KDLUu/OqQ4cXj1XXx5dcO/S2YYTXXBFN5ZpSo1TZeSSubhENzRdrwJHxJ/WKGaY5W88acchkC1ZT47xx/R9X/zjjM8pf9/sT1aXbdG2rztScJSOIJmrFMden2BUa2UG9+vdSh2vmwlivaff9RqtqMXM4ji3S4w+/qqsVSWEaPv9VPeJLP2MAQPW5Zhq1yncnTpds1ljpfDJErllSS7b2z35hHveDzyY57zDPK4U4n1xpHveyKyna/dmKHu4cEWszyjZnxMBZzs3fXjbf5VGQtcA5Osru+RnjvT3/42vz1YrsciZFl75XzuFvmYerUPaakowzVOLUfzsT7Z5zyx7lHD13s7OCy3YW5G5wzh3RxmlkH/f7bf3mOU+Zr1/jreGe8yre2bOn677YnVGjFzizCsz3mC7nf+586d4wr/fLGf9SVffkxhXkHXFmb0h1Jg3t6DQC3dXPtUU4B8474Kzg6wPALc2fz/EAruE4rwvu3qJSbNduZskPwpuosVl0DZW8cN4sViY3TStyjGt4drOOrntBD1QwHDe46yQtO7BFSZ5hMMr88/P6sNZbEQ7pL0OmKr30c8MSNW/PAS2b/oAqGkUcHDVA0z88pO1Jse4J0oo3P6cJS/LNvapkKTPTuC9JW3Rg2SR1LTdK1d6kv2Zu/lTPevrpKutvr/px8q3dSo4p7S9ydQuJ7KCuD03SnDVfqVCuieFe0uojx7VuamyZGhcAgH8FbuDYnaX9ZtElyO7Hx0XnWN1pFn1l6/eaNr1yv/EIq4I9QSlpMxVv7qpguRYurd3E4Vg1UymZpY0oLTVpxVpNve76MXYlpGzSa/1KI0eB0ubM82nIsK3nbKWlJFT+MDfuyQt/TPTM9npiqz73pQnrhtkU0aWf7o9vqQZFV8xjAACrBPYoFasY4SXILPrmDk2cNdW34bgx0zSpn1lWsdLXrDPLtWPdux+pdI40W+JMvZzoa1CL1NRZE41vaspaoaXXDQY2DZk+Q9fryhs+bJA89VMHlb3HLN6wIIU1L9vvxdM3plhn96zV/3F3iE1VVQOIAAA3JnADR3gTuScG9bdytSfXFTJQjyaa5esK14D+sWZZKti5XfvMsvUytHGLpx2qz6ixxtVUQ+KjGuieB3yP/rnNLFaqj4YM9yHQtItWe3cVhw9NWD6L0/NbvddQcW1nVXDlsvIPbtDcp7uZa6m4OsROVo/Yp/Thz7+IDgDUSYEbONq1VSuz6LI/y49TUuef1yWzKEWri7sNpBLN26itWfRFXCevBpuiIhWZResd0MFvzKLaK6F3dYf1RCuqjVlUsXHPrxeVQtXEp4/opLvam8VaYVeTjgM0/c3dOr53nhLN5Fp87B39ZvJ78qV3CgCgegK4SaXsQyp3106/LbaWn73fM7+H7lRsZ7MY6MrU3Nyu4OsvNVJOnMpmpdqLSlaxx07V2hWT1NLcv7Dieb3McioA4HcBHDgSdF9Pdz28tGWt0vySOBxK+8RrnETPRD3sx/6oN49ghTQyi7c4e+Iz+pV7pEyu1q+ulV6rAHBLCehOoyNHDfGMbihYrtcX+aEyPH+RFn7iWQwueuAwtTPL/nLUM5e2FBRUzQ6qN6BdW7U2i8bf8jpf7dvlPQ24FOZbe0kA6K54r1qsC9W/MQCA6wjowGF/YqJGuTsxFit91nOe+SVqxKGM2f+pdHfeiNfTk/y9toZDm7Z4hmHYOscrzixbLryD2rrvV6527azuzdqj7INmUSHqHO/vKAYAqKsCOnDIPlLPT/GaNepEqp6cll7jvhyOjBc07nXPimkhT7yk53xZniV3mzb7+kexI00rPYlGfR6qzcU7+qrfPZ5mqA1vLapeB8n0lVpfOsjFdo/69TXLAW+3sryGJbVuS5ACAH8L7MBh6D57oSaV9vgznEgdrF5/yqh26HDkzNfgh+copzQLhAzS6/NG+jj75Ga96mNPw0NzZ2u5+6GdqCef8q1Zosjhjw4q4Ro7tp9nxtD0WXrO5yqhPM2fudDdmTZk1O81oY60qDjS/6q33Dmzp4b+S11pKgKAm0fABw7ZEzXv4yS5Zww3okb2n3srZqSvEzkVKjt1jDp1m6b00hmxXAt5/e0tTfBpJq+rcueO1eT1VU/i4MhI1vAXMuWe53Pii1U8tINc3TvcMnf4Z8Lv8N+9phnuSqETSh0x2IdVWh3KSO6vP2w2r9wWqz8872sYq337/t/fKvk6v4tSJQu4jUg17sRVIcOn63dUcACA3wV+4DDYE1K0admTauMOHcU6tmKy4sNbKmH8bH284zudL/NMLdTpb3bo49njldAyXPGT31fJIq8lwpQ4b4c+GFeNtGGzyVaco9Shceqb/JEOlw86jvPKTB2pmN5eNShhI/Tqy4lVPLTj1LuXu8OFTi+codl+Wb69u2a/5xXQLqRrWrdOGvPKxmuv21B4eKNeGRmj3nNyzKBkU+yMJZrp764tflR0fKPmDGqlZt3H65WNX5X73ZsKD2vjK0bQjJmotNKgGTZcf1s0rnqToQEAfGMu4mYJa1eLvVbB1pecfSJcq5N6Vh+t1mbv6pyyrtJ1UMsouzLrs86FSbGeFVVtwc6mkZHOyJKtqWdV0tLN+Jx//cKHtUm3THG29P452Z2h7vOGOkeXW0HW59ViDac+eNJpBDSvc7s27/MbW6j36rauzeaMnbSu8pViXcqsFjvc6cMit4bqr4xblTL3oWQr972aBpdZ/bZkC7vX+R++/E4A4BbCarGVCL5/prYcP6LVSQ+qRXXq+23B6jh6gbLyszR/YDVqNtyC1Ctlk9ZM6Xq1xqK4UOfy8pRXsp1TYWmthsEeNVoL9+zUvyf4cIF9Ziv16Taeob9y6KL7vBf1g3m0JiJHvq2cXQs0Osr7OrzPb2wXvaoG7FEavXCv9iwY6NuaMT+j8I6x5pTlpcp9r3OF7mYt44upxYNJWndwh/63L78TAECN1KnAUcLeRkNT0nXiUr6+/GiWnhncSx3cC3aZjIDRNLKDeg1+RrPe3aDciwU6WMHy6dUTqYHzs5Sf9baShsapqdcH2kMjFdf/Gc3dkKv83GWacN3VWUuF65E3c7Tr7SQNjfP6Dq7rj+uv/lHmfg2VLJmfm6/cDalKGuW6T6FeTTw2BTd1XfevlfT2l8q/lKtlEwJjCfd2/89qnbmYqw2pSRrVq4MimwZ7hTbX7WuqSOP+/TrpbX2Zf0kn0lNUo5wJAPBZPVc1h1n2u+Mnz5T826pFs5J/65LdyTHqMccc2hCdpF2HUnQTd2sAAKDa/Pkcr3s1HAAA4KZD4AAAAJYjcAAAAMsROAAAgOUIHAAAwHIEDgAAYDkCBwAAsByBAwAAWI6JvwAAQIWY+AsAAAQUAgcAALAcgQMAAFiOwAEAACxH4AAAAJYjcAAAAMsROAAAgOUIHAAAwHIEDgAAYDkCBwAAsByBAwAAWI7AAQAALEfgAAAAlquV1WIBAEDgYrVYAAAQECyt4QAAAHChhgMAAFiOwAEAACxH4AAAAJYjcAAAAMsROAAAgOUIHAAAwHIEDgAAYDkCBwAAsByBAwAAWI7AAQAALEfgAAAAliNwAAAAyxE4AACA5QgcAADAcgQOAABgOQIHAACwHIEDAABYjsABAAAsR+AAAACWI3AAAADLETgAAIDlCBwAAMByBA4AAGA5AgcAALAcgQMAAFhM+v8BmbFrxy/wzi0AAAAASUVORK5CYII=" title="keyProp=\"label\"">
![Output 2](wK1.png 'keyProp="id"')

```javascript
<ASelect
  value={value}
  options={[
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
  ]}
  keyProp="label"
  onChange={(selectedOption, selectedOptionObject, currentSearchString) => {
    setValue(selectedOption);
    setCurrentObject(selectedOptionObject);
  }}
/>
```

#### Basic Example with Grouped Options

![Output](BGO.png)

```javascript
<ASelect
  value={value}
  options={[
    {
      groupName: "Group 1",
      options: ["Option 1", "Option 2"],
    },
    {
      groupName: "Group 2",
      options: ["Option 3", "Option 4"],
    },
  ]}
  onChange={(selectedOption, selectedOptionObject, currentSearchString) =>
    setValue(selectedOption)
  }
/>
```

#### Advanced Example with Grouped Options

![Output](AGO.png)

```javascript
<ASelect
  value={value}
  options={[
    {
      groupName: "ID Group",
      options: [
        { id: 1, label: "Option 1" },
        { id: 2, label: "Option 2" },
        { id: 3, label: "Option 3" },
      ],
      keyProp: "id",
    },
    {
      groupName: "Label Group",
      options: [
        { id: 1, label: "Option 1" },
        { id: 2, label: "Option 2" },
        { id: 3, label: "Option 3" },
      ],
      keyProp: "label",
    },
  ]}
  onChange={(selectedOption, selectedOptionObject, currentSearchString) =>
    setValue(selectedOption)
  }
/>
```

### Props

| Prop        | Type                                                              | Default     | Description                                                                                                       |
| ----------- | ----------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| value       | string                                                            |             | The currently selected value.                                                                                     |
| onChange    | (selectedOption, selectedOptionObject, currentSearchString) => {} |             | Callback function invoked when a new value is selected.                                                           |
| options     | array                                                             |             | List of options to display in the dropdown.                                                                       |
| keyProp     | string                                                            |             | Property to be used as a key within the objects of the options list. Mandatory if options is an array of objects. |
| searchable  | boolean                                                           | true        | Boolean indicating if the dropdown is searchable.                                                                 |
| placeholder | string                                                            | "Search..." | Placeholder text for the input field.                                                                             |
| disabled    | boolean                                                           |             | Disables the select component.                                                                                    |
| width       | string or number                                                  |             | Width of the select component.                                                                                    |
| zIndex      | number                                                            | 1           | z-index for the dropdown.                                                                                         |
| fontSize    | number                                                            | 16          | Font size for the select component.                                                                               |
| required    | boolean                                                           | false       | Indicates whether the select component is required.                                                               |

### Conclusion

With the `ASelect` component, you can easily add customizable dropdown select functionality to your React applications. Choose from a variety of options including array of strings, array of objects with keyProp, and grouped options to suit your needs. Follow the documentation to install and use the component in your project for testing and development purposes.
