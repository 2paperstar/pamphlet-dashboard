import { useParams } from 'react-router';
import { useSection } from '../api/exhitbition';
import { Box, Button, CircularProgress, TextField } from '@mui/material';
import {
  changeBoothLongDescription,
  changeBoothName,
  changeBoothShortDescription,
  changeBoothStatus,
  createBooth,
  linkBoothToSection,
} from '../api/booth';

const SectionBooth = () => {
  const { id, sectionId } = useParams<{ id: string; sectionId: string }>();
  const { data: section, refetch } = useSection(Number(sectionId));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!section?.booth) {
      createBooth({
        name: e.currentTarget.boothName.value,
        exhibition_id: Number(id),
        long_description: e.currentTarget.longDescription.value,
        short_description: e.currentTarget.description.value,
        status: Number(e.currentTarget.status.value),
        password: e.currentTarget.password.value,
      })
        .then((data) => linkBoothToSection(data.id, Number(sectionId)))
        .then(() => refetch());
    } else {
      Promise.all([
        changeBoothName(section.booth.id, e.currentTarget.boothName.value),
        changeBoothShortDescription(
          section.booth.id,
          e.currentTarget.description.value
        ),
        changeBoothLongDescription(
          section.booth.id,
          e.currentTarget.longDescription.value
        ),
        changeBoothStatus(
          section.booth.id,
          Number(e.currentTarget.status.value)
        ),
      ]);
    }
  };

  if (!section) return <CircularProgress />;
  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      component="form"
      gap={2}
      onSubmit={handleSubmit}
    >
      <TextField label="행사장 id" required disabled defaultValue={id} />
      <TextField
        label="짧은 설명"
        required
        name="description"
        defaultValue={section?.booth.shortDescription}
      />
      <TextField
        label="긴 설명"
        required
        name="longDescription"
        multiline
        defaultValue={section?.booth.longDescription}
      />
      <TextField
        label="상태"
        required
        name="status"
        disabled
        defaultValue="0"
      />
      <TextField
        label="이름"
        required
        name="boothName"
        defaultValue={section?.booth.name}
      />
      <TextField label="비밀번호" required name="password" />
      <Box flexGrow={1} />
      <Button variant="contained" type="submit">
        저장
      </Button>
    </Box>
  );
};

export default SectionBooth;
