import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  BackgroundContainer,
  ResponsiveContainer,
  ImageContainer,
  Heading,
  ImageElement,
  EditorContainer,
  ButtonContainer,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  HorizontalLine,
  TextAreaElement,
  Image,
} from './styledComponent'

class TextEditor extends Component {
  state = {
    textToBold: false,
    textToItalic: false,
    textToUnderline: false,
  }

  onClickToBoldText = () => {
    this.setState(prevState => ({textToBold: !prevState.textToBold}))
  }

  onClickChangeToItalic = () => {
    this.setState(prevState => ({textToItalic: !prevState.textToItalic}))
  }

  onClickTextUnderline = () => {
    this.setState(prevState => ({textToUnderline: !prevState.textToUnderline}))
  }

  render() {
    const {textToBold, textToItalic, textToUnderline} = this.state
    const boldColor = textToBold ? '#faff00' : '#f1f5f9'
    const italicButtonColor = textToItalic ? '#faff00' : '#f1f5f9'
    const underlineTextColor = textToUnderline ? '#faff00' : '#f1f5f9'

    const fontWeight = textToBold ? 'bold' : 'normal'
    const fontStyle = textToItalic ? 'italic' : 'normal'
    const textDecoration = textToUnderline ? 'underline' : 'normal'

    return (
      <BackgroundContainer>
        <ResponsiveContainer>
          <ImageContainer>
            <div>
              <Heading>Text Editor</Heading>
              <ImageElement>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                  alt="text editor"
                />
              </ImageElement>
            </div>
            <EditorContainer>
              <ButtonContainer>
                <li>
                  <BoldButton
                    data-testid="bold"
                    color={boldColor}
                    type="button"
                    onClick={this.onClickToBoldText}
                  >
                    <VscBold size={25} />
                  </BoldButton>
                </li>
                <li>
                  <ItalicButton
                    data-testid="italic"
                    color={italicButtonColor}
                    type="button"
                    onClick={this.onClickChangeToItalic}
                  >
                    <GoItalic size={25} />
                  </ItalicButton>
                </li>
                <li>
                  <UnderlineButton
                    data-testid="underline"
                    color={underlineTextColor}
                    type="button"
                    onClick={this.onClickTextUnderline}
                  >
                    <AiOutlineUnderline size={25} />
                  </UnderlineButton>
                </li>
              </ButtonContainer>
              <HorizontalLine />
              <TextAreaElement
                fontStyle={fontStyle}
                fontWeight={fontWeight}
                textDecoration={textDecoration}
              />
            </EditorContainer>
          </ImageContainer>
        </ResponsiveContainer>
      </BackgroundContainer>
    )
  }
}
export default TextEditor
