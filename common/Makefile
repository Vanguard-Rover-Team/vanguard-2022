CC = g++

TARGET		:= libcommon.a

OUT_DIR		:= lib/
SRC_DIR		:= src/
INC_DIR		:= include/
OBJ_DIR		:= .build/
DEP_DIR		:= .deps/

ADD_INCL	:= 
ADD_LIBDIRS := 
ADD_LIBS	:= 

# Files that need to be generated (e.g. protocol buffer source files)
GEN_SRC		:= message.pb.cc
GEN_INCL	:= message.pb.h

COMPILER_FLAGS	:= -Wall $(addprefix -I, $(INC_DIR) $(ADD_INCL))
LINKER_FLAGS	:= -Wall $(addprefix -L, $(ADD_LIBDIRS)) $(addprefix -l, $(ADD_LIBS))
DEP_FLAGS = 

SRCS := $(shell find $(SRC_DIR) -name '*.cpp') $(addprefix $(SRC_DIR),$(GEN_SRC))
OBJS := $(patsubst $(SRC_DIR)%,$(OBJ_DIR)%.o,$(SRCS))

# Final Target Rule (Linker)
$(OUT_DIR)$(TARGET) : $(OBJS)
	@echo -n "L: "
	@mkdir -p $(OUT_DIR)
	ar rcs $@ $^

# Compile Rule
$(OBJS) : $(OBJ_DIR)%.o : $(SRC_DIR)% $(DEP_DIR)%.d | $(DEP_DIR)
	@echo -n "C: "
	@mkdir -p $(OBJ_DIR)
	$(CC) -MT $@ -MMD -MP -MF $(DEP_DIR)$*.d -c $< -o $@ $(COMPILER_FLAGS)

# Protocol Buffers Rule
%.pb.cc : %.proto
	@echo "Compiling: $<"
	@protoc -I=$(SRC_DIR) --cpp_out=$(SRC_DIR) $<
	mv $(SRC_DIR)$(notdir $(patsubst %.proto,%.pb.h,$<)) $(INC_DIR)$(notdir $(patsubst %.proto,%.pb.h,$<))

# Make Dependency Directory Rule
$(DEP_DIR) :
	@mkdir -p $@

DEPFILES := $(patsubst $(OBJ_DIR)%.o,$(DEP_DIR)%.d,$(OBJS))

.PHONY : clean
clean:
	rm -rf $(OBJ_DIR) $(OUT_DIR) $(DEP_DIR) $(SRC_DIR)$(GEN_SRC) $(INC_DIR)$(GEN_INCL)

# Include all dependency rules from dependency Makefiles
$(DEPFILES):
include $(wildcard $(DEPFILES))


