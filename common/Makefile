TARGET		:= libcommon.a

OUT_DIR		:= lib/
SRC_DIR		:= src/
INC_DIR		:= include/
OBJ_DIR		:= .build/
DEP_DIR		:= .deps/

ADD_INCL	:= 
ADD_LIBDIRS := 
ADD_LIBS	:= 

COMPILER		:= g++
COMPILER_FLAGS	:= -Wall $(addprefix -I, $(INC_DIR) $(ADD_INCL))
LINKER_FLAGS	:= -Wall $(addprefix -L, $(ADD_LIBDIRS)) $(addprefix -l, $(ADD_LIBS))

PROTO_FILES := $(shell find $(SRC_DIR) -name '*.proto')
PROTO_SRCS := $(patsubst %.proto,%.pb.cc,$(PROTO_FILES))
SRCS := $(shell find $(SRC_DIR) -name '*.cpp') $(PROTO_SRCS)
OBJS := $(patsubst $(SRC_DIR)%,$(OBJ_DIR)%.o,$(SRCS))

# Final Target Rule (Linker)
$(OUT_DIR)$(TARGET) : $(OBJS)
	@echo -n "L: "
	@mkdir -p $(OUT_DIR)
	ar rcs $@ $^

# Compile Rule
$(OBJS) : $(OBJ_DIR)%.o : $(SRC_DIR)% $(DEP_DIR)%.d | $(DEP_DIR) $(PROTO_SRCS)
	@echo -n "C: "
	@mkdir -p $(OBJ_DIR)
	$(COMPILER) -MT $@ -MMD -MP -MF $(DEP_DIR)$*.d -c $< -o $@ $(COMPILER_FLAGS)

# Protocol Buffers Rule
%.pb.cc : %.proto
	@echo -n "C: "
	protoc -I=$(SRC_DIR) --cpp_out=$(SRC_DIR) $<
	@mv $(SRC_DIR)$(notdir $(patsubst %.proto,%.pb.h,$<)) $(INC_DIR)$(notdir $(patsubst %.proto,%.pb.h,$<))

# Make Dependency Directory Rule
$(DEP_DIR) :
	@mkdir -p $@

DEP_FILES := $(patsubst $(OBJ_DIR)%.o,$(DEP_DIR)%.d,$(OBJS))

GEN_FILES := $(shell find $(SRC_DIR) -name '*.pb.cc') $(shell find $(INCL_DIR) -name '*.pb.h')

.PHONY : clean
clean:
	rm -rf $(OBJ_DIR) $(OUT_DIR) $(DEP_DIR) $(GEN_FILES)

# Include all dependency rules from dependency Makefiles
$(DEP_FILES):
include $(wildcard $(DEP_FILES))
